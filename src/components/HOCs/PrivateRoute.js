import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Skeleton from 'components/Skeleton';

const PrivateRoute = () => {
  const auth = localStorage.getItem('email');

  return auth ? (
    <Suspense fallback={<Skeleton />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
