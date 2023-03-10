import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllCharters } from 'services/API/API';
import { Box } from 'utils/Box';
import { sortedCharactersByName } from 'helpers/sortedCharacters';
import { BASE_URL } from 'helpers/constans';
import { useGetCharacterByNameQuery } from 'redux/characterSlice';
import { useSearchParams } from 'react-router-dom';

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

  const { data } = useGetCharacterByNameQuery(query);
  console.log('data in list', data?.results);

  useEffect(() => {
    if (data) {
      console.log(333);
      setCharacters(data?.results);
    } else {
      console.log('query in useEffect', query);
      getAllCharters().then(setCharacters);
    }
  }, [data, query]);

  return (
    <>
      <StyledList>
        {characters.length !== 0 &&
          sortedCharactersByName(characters).map(
            ({ id, name, image, species }) => (
              <StyledItem key={id}>
                <StyledLink to={`${BASE_URL}${id}`} state={{ from: location }}>
                  <img src={image} alt={name} width="240" />
                  <Box display="flex" flexDirection="column" m={5}>
                    <CharacterName>{name}</CharacterName>
                    <Species>{species}</Species>
                  </Box>
                </StyledLink>
              </StyledItem>
            )
          )}
      </StyledList>
    </>
  );
};

export default CharacterList;
