import { Routes, Route } from 'react-router-dom';
import { Box } from 'utils/Box';
import HomePage from 'pages/HomePage';

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
      </Routes>
    </Box>
  );
}

export default App;
