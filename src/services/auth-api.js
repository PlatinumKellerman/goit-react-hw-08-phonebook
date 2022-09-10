import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set(token) {
    authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    authApi.defaults.headers.common.Authorization = '';
  },
};
