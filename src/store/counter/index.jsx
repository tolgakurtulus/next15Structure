import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    beijePed_Standard_Ped: 0,
    beijePed_Süper_Ped: 0,
    beijePed_Süper_Plas_Ped: 0,
    beijeGunlukPad_Standard_Ped: 0,
    beijeGunlukPad_Süper_Ped: 0,
    beijeTampon_Mini_Tapmon: 0,
    beijeTampon_Standard_Tampon: 0,
    beijeTampon_Süper_Tampon: 0,
    beijeKap_Süper_Kap: 0,
    beijeKap_Standard_Kap: 0,
    beijeisibandi_2li_Paket: 0,
    beijeisibandi_4li_Paket: 0,
    Supplement_Supplement: 0,
  },
};

const standartPedCounter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const key = action.payload;
      if (state.value[key] !== undefined) {
        state.value[key] += 1;
      }
    },
    decrement: (state, action) => {
      const key = action.payload;
      if (state.value[key] !== undefined && state.value[key] > 0) {
        state.value[key] -= 1;
      }
    },
  },
});

export const { increment, decrement } = standartPedCounter.actions;
export const standartPedCounterReducer = standartPedCounter.reducer;
