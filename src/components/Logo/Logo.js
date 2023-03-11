import React from 'react';
import logo_1x from '../../assets/logo_1x.png';
import { Title, Wrapper } from './Logo.styled';

const Logo = () => {
  return (
    <Wrapper>
      <Title>Rick and Morty</Title>
      <img src={logo_1x} alt="logo Rick and Morty" width="312px" />
    </Wrapper>
  );
};

export default Logo;
