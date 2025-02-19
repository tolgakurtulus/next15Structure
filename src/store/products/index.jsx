import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSliceModule } from '../createSliceModule';
import { CallApi } from '../callApi';

export const getProducts = createAsyncThunk('getProductsReducer', async () => {
  const config = {
    url: `/packets-and-products`,
    method: 'GET',
  };

  return await CallApi(config);
});

export const getProductsReducer = createSliceModule('getProductsReducer', getProducts).reducer;
