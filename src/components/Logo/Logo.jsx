import React from 'react';
import { Box } from 'utils/Box';
import logo_1x from '../../assets/logo_1x.png';
import { Title } from './Logo.styled';

const Logo = () => {
  return (
    <Box mb={5} width="600px" mx={0}>
      <Title>Rick and Morty</Title>
      <img src={logo_1x} alt="logo Rick and Morty" />
    </Box>
  );
};

export default Logo;
