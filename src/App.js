import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CharacterDetailsPage from 'pages/CharacterDetailsPage';
import BackToTop from 'components/BackToTop';
import NotFoundPage from 'pages/NotFoundPage';
import { Wrapper } from 'App.styled';
import LoginPage from 'pages/LoginPage';
import PublicRoute from 'components/HOCs/PublicRoute';
import PrivateRoute from 'components/HOCs/PrivateRoute';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <BackToTop />
    </Wrapper>
  );
}

export default App;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB852NztmUiiET4UCHJBHH7eRlQ4El4sdw",
//   authDomain: "rick-and-morty-8e328.firebaseapp.com",
//   projectId: "rick-and-morty-8e328",
//   storageBucket: "rick-and-morty-8e328.appspot.com",
//   messagingSenderId: "989816245720",
//   appId: "1:989816245720:web:005c5b489c5a634afa76ad"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
