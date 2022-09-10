import { authApi } from './auth-api';

export async function register(credentials) {
  const { data } = await authApi.post('/users/signup', credentials);
  return data;
}

export async function logIn(credentials) {
  const { data } = await authApi.post('/users/login', credentials);
  return data;
}

export async function logOut() {
  const { data } = await authApi.post('/users/logout');
  return data;
}

export async function fetchCurrentUser() {
  const { data } = await authApi.get('/users/current');
  return data;
}
