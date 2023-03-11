import Filter from 'components/Filter';
import CharacterList from 'components/CharacterList';
import Logo from 'components/Logo';
import { Box } from 'utils/Box';
import { useSearchParams } from 'react-router-dom';
import { useGetCharacterByNameQuery } from 'redux/characterSlice';
import NothingFound from 'components/NothingFound';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  // eslint-disable-next-line
  const { data, error } = useGetCharacterByNameQuery(query);

  return (
    <Box pb="188px" pt="86px" width="100%">
      <Logo />
      <Filter />
      {error?.status === 404 ? <NothingFound /> : <CharacterList />}
    </Box>
  );
};

export default HomePage;
