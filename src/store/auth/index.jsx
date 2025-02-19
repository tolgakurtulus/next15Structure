import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSliceModule } from '../createSliceModule';
import { CallApi } from '../callApi';

export const login = createAsyncThunk('authReducer', async ({ email, password }) => {
  const config = {
    url: `/sign-in-request`,
    method: 'POST',
    data: {
      email,
      password,
    },
  };
  const response = await CallApi(config);
  const token = response?.data?.token;
  if (token) {
    localStorage.setItem('token', token);
    window.location.href = '/';
  }
  return response;
});

export const authReducer = createSliceModule('authReducer', login).reducer;
