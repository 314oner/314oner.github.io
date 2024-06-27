import { RootState } from '@/store';
import { useAuth } from '@/utils/auth-util';
import { encode } from 'js-base64';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, type Path } from 'react-router-dom';

export default function PrivateRoute({
  loginUrl,
}: {
  loginUrl: string | Partial<Path>;
}) {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: RootState) => state.user);

  return isAuthenticated || currentUser ? (
    <Outlet />
  ) : (
    <Navigate to={`${loginUrl}?redirect=${encode(pathname)}`} replace />
  );
}
