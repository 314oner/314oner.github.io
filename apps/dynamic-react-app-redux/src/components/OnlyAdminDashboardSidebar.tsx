import { RootState } from '@/store';
import { useAuth } from '@/utils/auth-util';
import { Sidebar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import {
  HiAnnotation,
  HiArrowSmRight,
  HiChartPie,
  HiDocumentText,
  HiOutlineUserGroup,
  HiUser,
} from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export default function OnlyAdminDashboardSidebar() {
  const location = useLocation();
  const { currentUser } = useSelector((state: RootState) => state.user);
  const { logoutUser } = useAuth();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          {currentUser && currentUser?.payload?.data?.user?.isAdmin && (
            <Link to="/dashboard?tab=dash">
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as="div"
              >
                Дашборд
              </Sidebar.Item>
            </Link>
          )}
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === 'profile'}
              data-testid="dashUserStatus"
              icon={HiUser}
              label={
                currentUser?.payload?.data?.user?.isAdmin ? 'Admin' : 'User'
              }
              labelColor="dark"
              as="div"
            >
              Профиль
            </Sidebar.Item>
          </Link>
          {currentUser?.payload?.data?.user?.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as="div"
              >
                Сообшения
              </Sidebar.Item>
            </Link>
          )}
          {currentUser?.payload?.data?.user?.isAdmin && (
            <>
              <Link to="/dashboard?tab=users">
                <Sidebar.Item
                  active={tab === 'users'}
                  icon={HiOutlineUserGroup}
                  as="div"
                >
                  Пользователи
                </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=comments">
                <Sidebar.Item
                  active={tab === 'comments'}
                  icon={HiAnnotation}
                  as="div"
                >
                  Комментарии
                </Sidebar.Item>
              </Link>
            </>
          )}
          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer"
            onClick={logoutUser}
          >
            Выйти
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
