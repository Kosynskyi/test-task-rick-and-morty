import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB852NztmUiiET4UCHJBHH7eRlQ4El4sdw',
  authDomain: 'rick-and-morty-8e328.firebaseapp.com',
  projectId: 'rick-and-morty-8e328',
  storageBucket: 'rick-and-morty-8e328.appspot.com',
  messagingSenderId: '989816245720',
  appId: '1:989816245720:web:005c5b489c5a634afa76ad',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
