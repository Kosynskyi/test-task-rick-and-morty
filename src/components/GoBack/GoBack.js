import { useLocation } from 'react-router-dom';
import { ReactComponent as GoBackIcon } from 'assets/arrow_back.svg';
import { Box } from 'utils/Box';
import { GoBackLink, GoBackText } from './GoBack.styled';

const GoBack = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      <GoBackLink to={backLinkHref}>
        <GoBackIcon /> <GoBackText>go back</GoBackText>
      </GoBackLink>
    </Box>
  );
};

export default GoBack;
