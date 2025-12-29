import axios from 'axios';

const API_URL = 'http://localhost:3001'; // json-server

export const getMovies = async (params = {}) => {
  const response = await axios.get(`${API_URL}/movies`, {
    params
  });
  return response.data;
};
