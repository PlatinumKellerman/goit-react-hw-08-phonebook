import axios from 'axios';
// import { store } from '../redux/store';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

// const token = '';

// const state = store.getState();
// console.log(state);

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
  const { data } = await axios.get('/users/current', {
    // headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}
