import * as contactAPI from '../../services/phonebook-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await contactAPI.registerUser(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const logIn = createAsyncThunk(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await contactAPI.loginUser(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const logOut = createAsyncThunk(
  '/auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await contactAPI.logoutUser(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const data = await contactAPI.getCurrentUser(persistedToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
