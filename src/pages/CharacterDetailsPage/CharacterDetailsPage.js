import CharacterDetails from 'components/CharacterDetails';
import GoBack from 'components/GoBack';
import { Wrapper } from './CharacterDetailsPage.styled';

const CharacterDetailsPage = () => {
  return (
    <Wrapper>
      <GoBack />
      <CharacterDetails />
    </Wrapper>
  );
};

export default CharacterDetailsPage;
