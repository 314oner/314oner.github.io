//@ts-nocheck
import { RootState } from '@/store';
import { Button, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function DashboardComp() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const { currentUser } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/user/getusers?limit=5');
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
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
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getposts?limit=5');
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
          setTotalPosts(data.totalPosts);
          setLastMonthPosts(data.lastMonthPosts);
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
    const fetchComments = async () => {
      try {
        const res = await fetch('/api/comment/getcomments?limit=5');
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
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
      fetchPosts();
      fetchComments();
    }
  }, [currentUser]);
  return (
    <div className="p-3 md:mx-auto">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col w-full gap-4 p-3 rounded-md shadow-md md:w-72">
          <div className="flex justify-between">
            <div className="">
              <h3 className="uppercase text-md">Всего пользователей</h3>
              <p className="text-2xl">{totalUsers}</p>
            </div>
            <HiOutlineUserGroup className="p-3 text-5xl text-white bg-teal-600 rounded-full shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="flex items-center text-green-500">
              <HiArrowNarrowUp />
              {lastMonthUsers}
            </span>
            <div>За последний месяц</div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 p-3 rounded-md shadow-md md:w-72">
          <div className="flex justify-between">
            <div className="">
              <h3 className="uppercase text-md">Всего комментариев</h3>
              <p className="text-2xl">{totalComments}</p>
            </div>
            <HiAnnotation className="p-3 text-5xl text-white bg-indigo-600 rounded-full shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="flex items-center text-green-500">
              <HiArrowNarrowUp />
              {lastMonthComments}
            </span>
            <div>За последний месяц</div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 p-3 rounded-md shadow-md md:w-72">
          <div className="flex justify-between">
            <div className="">
              <h3 className="uppercase text-md">Всего тем для общения</h3>
              <p className="text-2xl">{totalPosts}</p>
            </div>
            <HiDocumentText className="p-3 text-5xl text-white rounded-full shadow-lg bg-lime-600" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="flex items-center text-green-500">
              <HiArrowNarrowUp />
              {lastMonthPosts}
            </span>
            <div>За последний месяц</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-3 mx-auto">
        <div className="flex flex-col w-full p-2 rounded-md shadow-md md:w-auto">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="p-2 text-center">Последние пользователи</h1>
            <Button outline gradientDuoTone="purpleToPink">
              <Link to={'/dashboard?tab=users'}>Посмотреть все</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Изображение пользователя</Table.HeadCell>
              <Table.HeadCell>Имя пользователя</Table.HeadCell>
            </Table.Head>
            {users &&
              users.map((user) => (
                <Table.Body key={user.id} className="divide-y">
                  <Table.Row className="bg-white">
                    <Table.Cell>
                      <img
                        src={user.profilePicture}
                        className="w-10 h-10 rounded-full"
                      />
                    </Table.Cell>
                    <Table.Cell>{user.username}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>
        <div className="flex flex-col w-full p-2 rounded-md shadow-md md:w-auto">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="p-2 text-center">Последние комментарии</h1>
            <Button outline gradientDuoTone="purpleToPink">
              <Link to={'/dashboard?tab=comments'}>Посмотреть все</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Комментарии</Table.HeadCell>
              <Table.HeadCell>Понравилось</Table.HeadCell>
            </Table.Head>
            {comments &&
              comments.map((comment) => (
                <Table.Body key={comment.id} className="divide-y">
                  <Table.Row className="bg-white">
                    <Table.Cell className="w-96">
                      <p className="line-clamp-2">{comment?.content}</p>
                    </Table.Cell>
                    <Table.Cell>{comment?.numberOfLikes}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>
        <div className="flex flex-col w-full p-2 rounded-md shadow-md md:w-auto">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="p-2 text-center">Последние сообшения</h1>
            <Button outline gradientDuoTone="purpleToPink">
              <Link to={'/dashboard?tab=posts'}>Посмотреть все</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Изображение сообшения</Table.HeadCell>
              <Table.HeadCell>Тема сообшения</Table.HeadCell>
              <Table.HeadCell>Категория</Table.HeadCell>
            </Table.Head>
            {posts &&
              posts.map((post) => (
                <Table.Body key={post.id} className="divide-y">
                  <Table.Row className="bg-white">
                    <Table.Cell>
                      <img src={post?.image} className="h-10 rounded-md w-14" />
                    </Table.Cell>
                    <Table.Cell className="w-96">{post?.title}</Table.Cell>
                    <Table.Cell className="w-5">{post?.category}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
