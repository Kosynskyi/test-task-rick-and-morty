import { FcHome } from 'react-icons/fc';
import { Box } from 'utils/Box';
import { StyledBackHome, TextInfo } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <TextInfo>
        Opps...something went wrong 🤷‍♀️, back to{' '}
        <StyledBackHome to="/">
          <FcHome />
        </StyledBackHome>
      </TextInfo>
    </Box>
  );
};

export default NotFoundPage;
