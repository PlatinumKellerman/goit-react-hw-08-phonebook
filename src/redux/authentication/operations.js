import * as authAPI from 'services/auth-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const token = authAPI.token;

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await authAPI.register(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const data = await authAPI.logIn(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(error);
    return thunkAPI.rejectWithValue(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await authAPI.logOut();
    token.unset();
  } catch (error) {
    toast.error(error);
    return thunkAPI.rejectWithValue(error);
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const data = await authAPI.fetchCurrentUser();
    return data;
  } catch (error) {
    toast.error(error);
    return thunkAPI.rejectWithValue(error);
  }
});

const operations = {
  register,
  logOut,
  logIn,
  getCurrentUser,
};
export default operations;
