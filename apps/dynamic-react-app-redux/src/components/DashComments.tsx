//@ts-nocheck
import { RootState } from '@/store';
import { Button, Modal, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';

export default function DashComments() {
  const { currentUser } = useSelector((state: RootState) => state.user);

  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState('');
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/getcomments`);
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          if (data.comments.length < 9) {
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
      fetchComments();
    }
  }, [currentUser]); //currentUser.id

  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(
        `/api/comment/getcomments?startIndex=${startIndex}`,
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) => [...prev, ...data.comments]);
        if (data.comments.length < 9) {
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

  const handleDeleteComment = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/comment/deleteComment/${commentIdToDelete}`,
        {
          method: 'DELETE',
        },
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) =>
          prev.filter((comment) => comment.id !== commentIdToDelete),
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
      {!currentUser?.isAdmin && comments.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Дата создания</Table.HeadCell>
              <Table.HeadCell>Комментарии</Table.HeadCell>
              <Table.HeadCell>Колличество лайков</Table.HeadCell>
              <Table.HeadCell>Номер сообшения</Table.HeadCell>
              <Table.HeadCell>Пользователь</Table.HeadCell>
              <Table.HeadCell>Удалить</Table.HeadCell>
            </Table.Head>
            {comments.map((comment) => (
              <Table.Body className="divide-y" key={comment.id}>
                <Table.Row className="bg-white">
                  <Table.Cell>
                    {new Date(comment?.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>{comment?.content}</Table.Cell>
                  <Table.Cell>{comment?.numberOfLikes}</Table.Cell>
                  <Table.Cell>{comment?.postId}</Table.Cell>
                  <Table.Cell>{comment?.userId}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setCommentIdToDelete(comment?.id);
                      }}
                      className="font-medium text-red-500 cursor-pointer hover:underline"
                    >
                      Delete
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
        <p>Комментариев нету, либо отсутствуют права доступа!</p>
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
              Вы действительно хотите удалить этот комментарий?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteComment}>
                Да, удалить
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                Нет, не удалять
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
