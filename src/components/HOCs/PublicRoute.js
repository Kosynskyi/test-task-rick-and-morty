import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Skeleton from 'components/Skeleton';

const PublicRoute = () => {
  const auth = localStorage.getItem('email');

  return auth ? (
    <Navigate to="/home" />
  ) : (
    <Suspense fallback={<Skeleton />}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
