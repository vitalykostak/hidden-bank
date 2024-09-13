import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getCurrencyRate } from './services';
import { CurrencyDatePeriod, CurrencyRateSchema } from './types';

const initialState: CurrencyRateSchema = {
  loading: false,
  error: undefined,
  rates: [],
  datePeriod: CurrencyDatePeriod.oneWeek,
};

export const currencyRateSlice = createSlice({
  name: 'currencyRate',
  initialState,
  reducers: {
    setDatePeriod: (state, action: PayloadAction<CurrencyDatePeriod>) => {
      state.datePeriod = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCurrencyRate.pending, state => {
      state.error = undefined;
      state.loading = true;
    });
    builder.addCase(getCurrencyRate.fulfilled, (state, action) => {
      state.error = undefined;
      state.loading = false;
      state.rates = action.payload || [];
    });
    builder.addCase(getCurrencyRate.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const currencyRateActions = currencyRateSlice.actions;
export const currencyRateReducer = currencyRateSlice.reducer;
