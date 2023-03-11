import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Box } from 'utils/Box';
import { sortedCharactersByName } from 'helpers/sortedCharacters';
// import { BASE_URL } from 'helpers/constans';
import { getAllCharters } from 'services/API/API';
import { useGetCharacterByNameQuery } from 'redux/characterSlice';

import {
  StyledList,
  StyledItem,
  CharacterName,
  Species,
  StyledLink,
} from './CharacterList.styled';
import Skeleton from 'components/Skeleton';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  // eslint-disable-next-line
  const { data, error, isLoading } = useGetCharacterByNameQuery(query);
  // console.log('data in list', data?.results);
  // console.log('error', error);

  useEffect(() => {
    if (data) {
      // console.log(333);
      setCharacters(data?.results);
    } else {
      // console.log('query in useEffect', query);
      getAllCharters().then(setCharacters);
    }
  }, [data, query]);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <StyledList>
          {characters.length !== 0 &&
            sortedCharactersByName(characters).map(
              ({ id, name, image, species }) => (
                <StyledItem key={id}>
                  <StyledLink
                    // to={`${BASE_URL}${id}`}
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
