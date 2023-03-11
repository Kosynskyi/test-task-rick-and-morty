import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CharacterDetailsPage from 'pages/CharacterDetailsPage';
import BackToTop from 'components/BackToTop';
import NotFoundPage from 'pages/NotFoundPage';
import { Wrapper } from 'App.styled';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <BackToTop />
    </Wrapper>
  );
}

export default App;
