import { Routes, Route } from 'react-router-dom';
import { Box } from 'utils/Box';
import HomePage from 'pages/HomePage';
import CharacterDetails from 'pages/CharacterDetails';
import BackToTop from 'components/BackToTop';
import NotFoundPage from 'pages/NotFoundPage';

function App() {
  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxWidth="1020px"
      marginLeft={0}
      marginRight={0}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character" element={<CharacterDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <BackToTop />
    </Box>
  );
}

export default App;
