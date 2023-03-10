import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const getAllCharters = async (page = 1) => {
  try {
    const { data } = await axios(`/character?count=8&page=${page}`);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// : "https://rickandmortyapi.com/api/character/?page=2&name=${name}",
