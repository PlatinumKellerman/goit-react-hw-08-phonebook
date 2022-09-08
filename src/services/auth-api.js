import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function register(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}

export async function logIn(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}

export async function logOut() {
  const { data } = await axios.post('/users/logout');
  return data;
}

export async function fetchCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}
