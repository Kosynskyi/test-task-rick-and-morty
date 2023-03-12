import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const getCharacterInfo = async id => {
  try {
    const { data } = await axios(`/character/${id}`);
    console.log('data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
