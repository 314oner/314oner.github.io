import DashComments from '@/components/DashComments';
import DashPosts from '@/components/DashPosts';
import DashProfile from '@/components/DashProfile';
import DashUsers from '@/components/DashUsers';
import DashboardComp from '@/components/DashboardComp';
import OnlyAdminDashboardSidebar from '@/components/OnlyAdminDashboardSidebar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <div className="md:w-56">
        {/* DashboardSidebar */}
        <OnlyAdminDashboardSidebar />
      </div>
      {tab === 'profile' && <DashProfile />}
      {tab === 'posts' && <DashPosts />}
      {tab === 'users' && <DashUsers />}
      {tab === 'comments' && <DashComments />}
      {tab === 'dash' && <DashboardComp />}
    </div>
  );
}
