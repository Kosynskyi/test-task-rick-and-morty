import React from 'react';
import { LogOutButton, LogOutIcon } from './LogOut.styled';

const LogOut = () => {
  const logOut = () => {
    localStorage.removeItem('email');
    window.location.reload();
  };

  return (
    <>
      <LogOutButton onClick={logOut}>
        <LogOutIcon />
      </LogOutButton>
    </>
  );
};

export default LogOut;
