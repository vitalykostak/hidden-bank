import { Currency } from '@/entities/currency';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { CurrencySelectorSchema } from './types';

const initialState: CurrencySelectorSchema = {
  value: Currency.usd,
};

export const currencySelectorSlice = createSlice({
  name: 'currencySelector',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<Currency>) => {
      state.value = action.payload;
    },
  },
});

export const currencySelectorActions = currencySelectorSlice.actions;
export const currencySelectorReducer = currencySelectorSlice.reducer;
