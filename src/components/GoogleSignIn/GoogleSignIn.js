import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './config';
import { Box } from 'utils/Box';
import Logo from 'components/Logo';
import { SignInButton, GoogleIcon } from './GoogleSignIn.styled';

const SignIn = () => {
  const [user, setUser] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then(data => {
      setUser(data.user.email);
      localStorage.setItem('email', data.user.email);
    });
  };

  useEffect(() => {
    setUser(localStorage.getItem('email'));
  }, []);

  return (
    <>
      {user ? (
        <Navigate to="/characters" />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          backgroundColor="rgba(0,0,0,0.8)"
          width="100vw"
        >
          <Box mb={8}>
            <Logo />
          </Box>
          <SignInButton aria-label="Log in" onClick={handleClick}>
            Sign in with <GoogleIcon />
          </SignInButton>
        </Box>
      )}
    </>
  );
};

export default SignIn;
