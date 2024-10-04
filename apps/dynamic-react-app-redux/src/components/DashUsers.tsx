import { RootState } from '@/store';
import { Button, Modal, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';

export default function DashUsers() {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [users, setUsers] = useState<any[]>([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState('');
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getusers`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          if (data.users.length < 9) {
            setShowMore(false);
          }
        }
      } catch (e) {
        if (
          typeof e === 'object' &&
          e &&
          'message' in e &&
          typeof e.message === 'string'
        )
          console.log(e.message);
      }
    };
    if (currentUser?.isAdmin) {
      fetchUsers();
    }
  }, [currentUser]); //currentUser.id

  const handleShowMore = async () => {
    const startIndex = users.length;
    try {
      const res = await fetch(`/api/user/getusers?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => [...prev, ...data.users]);
        if (data.users.length < 9) {
          setShowMore(false);
        }
      }
    } catch (e) {
      if (
        typeof e === 'object' &&
        e &&
        'message' in e &&
        typeof e.message === 'string'
      )
        console.log(e.message);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`/api/user/delete/${userIdToDelete}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) =>
          prev.filter((user: any) => user.id !== userIdToDelete),
        );
        setShowModal(false);
      } else {
        console.log(data.message);
      }
    } catch (e) {
      if (
        typeof e === 'object' &&
        e &&
        'message' in e &&
        typeof e.message === 'string'
      )
        console.log(e.message);
    }
  };

  return (
    <div className="p-3 overflow-x-scroll table-auto md:mx-auto scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser?.isAdmin && users.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Дата создания</Table.HeadCell>
              <Table.HeadCell>Изображение пользователя</Table.HeadCell>
              <Table.HeadCell>Имя пользователя</Table.HeadCell>
              <Table.HeadCell>Электронная почта</Table.HeadCell>
              <Table.HeadCell>Администратор</Table.HeadCell>
              <Table.HeadCell>Удалить</Table.HeadCell>
            </Table.Head>
            {users.map((user: any) => (
              <Table.Body className="divide-y" key={user.id}>
                <Table.Row className="bg-white">
                  <Table.Cell>
                    {new Date(user?.createdAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <img
                      src={user?.profilePicture}
                      alt={user?.username}
                      className="object-cover w-10 h-10 rounded-full"
                    />
                  </Table.Cell>
                  <Table.Cell>{user?.username}</Table.Cell>
                  <Table.Cell>{user?.email}</Table.Cell>
                  <Table.Cell>
                    {user?.isAdmin ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaTimes className="text-red-500" />
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setUserIdToDelete(user.id);
                      }}
                      className="font-medium text-red-500 cursor-pointer hover:underline"
                    >
                      Удалить
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="self-center w-full text-sm text-teal-500 py-7"
            >
              Показать больше
            </button>
          )}
        </>
      ) : (
        <p>Пользователи не найдены, либо отсутствуют права доступа!</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14" />
            <h3 className="mb-5 text-lg">
              Вы действительно хотите удалить этого пользователя?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteUser}>
                Да, хочу удалить.
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                Нет, не удалять.
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
