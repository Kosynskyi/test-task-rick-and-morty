import React, { useState, useEffect } from 'react';
import { getAllCharters } from 'services/API/API';
import { Box } from 'utils/Box';
import { sortedCharactersByName } from 'helpers/sortedCharacters';
import { CHARACTER_LINK } from 'helpers/constans';
import {
  StyledList,
  StyledItem,
  CharacterName,
  Species,
  StyledLink,
} from './CharacterList.styled';

const HeroList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharters().then(setCharacters);
  }, []);

  return (
    <>
      <StyledList>
        {characters.length !== 0 &&
          sortedCharactersByName(characters).map(
            ({ id, name, image, species }) => (
              <StyledItem key={id}>
                <StyledLink to={`${CHARACTER_LINK}${id}`}>
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

export default HeroList;
