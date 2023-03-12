import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getAllCharters } from 'services/API/API';
import { useGetCharacterByNameQuery } from 'redux/characterSlice';
import { Box } from 'utils/Box';
import { sortedCharactersByName } from 'helpers/sortedCharacters';
import Skeleton from 'components/Skeleton';
import {
  StyledList,
  StyledItem,
  CharacterName,
  Species,
  StyledLink,
} from './CharacterList.styled';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  // eslint-disable-next-line
  const { data, error, isLoading, isFetching } =
    useGetCharacterByNameQuery(query);

  useEffect(() => {
    if (data) {
      setCharacters(data?.results);
    } else {
      getAllCharters().then(setCharacters);
    }
  }, [data, query]);

  return (
    <>
      {isFetching ? (
        <Skeleton />
      ) : (
        <StyledList>
          {characters.length !== 0 &&
            sortedCharactersByName(characters).map(
              ({ id, name, image, species }) => (
                <StyledItem key={id}>
                  <StyledLink
                    to={`/character/${id}`}
                    state={{ from: location }}
                  >
                    <img src={image} alt={name} width="312px" />
                    <Box display="flex" flexDirection="column" px={5} py={4}>
                      <CharacterName>{name}</CharacterName>
                      <Species>{species}</Species>
                    </Box>
                  </StyledLink>
                </StyledItem>
              )
            )}
        </StyledList>
      )}
    </>
  );
};

export default CharacterList;
