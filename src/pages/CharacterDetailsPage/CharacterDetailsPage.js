import CharacterDetails from 'components/CharacterDetails';
import GoBack from 'components/GoBack';
import { Box } from 'utils/Box';

const CharacterDetailsPage = () => {
  return (
    <Box pt="23px" px="50px" pb="142px">
      <GoBack />
      <CharacterDetails />
    </Box>
  );
};

export default CharacterDetailsPage;
