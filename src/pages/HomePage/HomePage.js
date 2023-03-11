import Filter from 'components/Filter';
import CharacterList from 'components/CharacterList';
import Logo from 'components/Logo';
import { useSearchParams } from 'react-router-dom';
import { useGetCharacterByNameQuery } from 'redux/characterSlice';
import NothingFound from 'components/NothingFound';
import { Wrapper } from './HomePage.styled';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  // eslint-disable-next-line
  const { data, error } = useGetCharacterByNameQuery(query);

  return (
    <>
      <Wrapper>
        <Logo />
        <Filter />
        {error?.status === 404 ? <NothingFound /> : <CharacterList />}
      </Wrapper>
    </>
  );
};

export default HomePage;
