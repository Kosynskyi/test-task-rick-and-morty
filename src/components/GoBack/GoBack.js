import { useLocation } from 'react-router-dom';
import { ReactComponent as GoBackIcon } from 'assets/arrow_back.svg';
import { GoBackLink, GoBackText, Wrapper } from './GoBack.styled';

const GoBack = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Wrapper>
      <GoBackLink to={backLinkHref}>
        <GoBackIcon /> <GoBackText>go back</GoBackText>
      </GoBackLink>
    </Wrapper>
  );
};

export default GoBack;
