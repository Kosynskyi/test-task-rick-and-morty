import React from 'react';
import Filter from 'components/Filter';
import CharacterList from 'components/CharacterList';
import Logo from 'components/Logo';
import { Box } from 'utils/Box';

const HomePage = () => {
  return (
    <Box pb="188px" pt="86px" width="100%">
      <Logo />
      <Filter />
      <CharacterList />
    </Box>
  );
};

export default HomePage;
