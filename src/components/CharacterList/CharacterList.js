import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  useGetCharacterByNameQuery,
  useGetAllChartersQuery,
} from 'redux/characterSlice';
import { Box } from 'utils/Box';
import { sortedCharactersByName } from 'helpers/sortedCharacters';
import Skeleton from 'components/Skeleton';
import Error from 'components/Error';
import Pagination from 'components/Pagination';
import {
  StyledList,
  StyledItem,
  CharacterName,
  Species,
  StyledLink,
} from './CharacterList.styled';

const CharacterList = () => {
  const [page, setPage] = useState(localStorage.getItem('page'));
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const sortedCharacters = sortedCharactersByName(characters);

  const charactersByName = useGetCharacterByNameQuery(query);
  const allCharacters = useGetAllChartersQuery(page, {
    refetchOnMountOrArgChange: true,
  });

  const totalPage = allCharacters?.data?.info?.pages;
  const loadingIndicator =
    allCharacters.isFetching || charactersByName.isFetching;
  const indicatorError = allCharacters.isError || charactersByName.isError;

  const actualPage = selectedPage => {
    setPage(Number(selectedPage));
  };

  useEffect(() => {
    if (query) {
      setCharacters(charactersByName?.data?.results);
    } else {
      setCharacters(allCharacters?.data?.results);
    }
  }, [query, charactersByName?.data, allCharacters?.data?.results, page]);

  if (!sortedCharacters) return;

  return (
    <>
      {indicatorError && <Error />}
      {loadingIndicator ? (
        <Skeleton />
      ) : (
        <StyledList>
          {characters?.length !== 0 &&
            sortedCharacters.map(({ id, name, image, species }) => (
              <StyledItem key={id}>
                <StyledLink to={`/character/${id}`} state={{ from: location }}>
                  <img src={image} alt={name} width="312px" />
                  <Box display="flex" flexDirection="column" px={5} py={4}>
                    <CharacterName>{name}</CharacterName>
                    <Species>{species}</Species>
                  </Box>
                </StyledLink>
              </StyledItem>
            ))}
        </StyledList>
      )}

      {!query && (
        <Pagination actualPage={actualPage} totalPage={totalPage} page={page} />
      )}
    </>
  );
};

export default CharacterList;
