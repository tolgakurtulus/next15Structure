import { configureStore } from '@reduxjs/toolkit';
import { standartPedCounterReducer } from './counter/index.jsx';
import { getProductsReducer } from './products/index.jsx';

export const store = configureStore({
  reducer: {
    standartPedCounterVal: standartPedCounterReducer,
    getProductsReducerVal: getProductsReducer,
  },
});
