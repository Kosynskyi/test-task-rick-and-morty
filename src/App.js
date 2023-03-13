import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Skeleton from 'components/Skeleton';
import BackToTop from 'components/BackToTop';
import { Wrapper } from 'App.styled';
import LoginPage from 'pages/LoginPage';
import PublicRoute from 'components/HOCs/PublicRoute';
import PrivateRoute from 'components/HOCs/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const CharacterDetailsPage = lazy(() => import('pages/CharacterDetailsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  return (
    <Wrapper>
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<LoginPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/characters" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterDetailsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <BackToTop />
    </Wrapper>
  );
}

export default App;
