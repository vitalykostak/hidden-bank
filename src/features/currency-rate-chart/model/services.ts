import { Currency, CurrencyRateInfo } from '@/entities/currency';
import { StateSchema } from '@/shared/config/store/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { currencyRateFetchStrategies } from './strategies';

export const getCurrencyRate = createAsyncThunk<
  CurrencyRateInfo[] | void,
  Currency,
  {
    state: StateSchema;
    rejectValue: string;
  }
>('currencyRate/getCurrencyRate', async (currency, thunkApi) => {
  const { rejectWithValue, getState } = thunkApi;

  try {
    const datePeriod = getState().currencyRate.datePeriod;

    const fetchStrategy = currencyRateFetchStrategies[datePeriod];

    const rates = await fetchStrategy(currency);

    if (!rates) {
      throw new Error('something went wrong');
    }

    return rates;
  } catch (e) {
    if (e instanceof Error) {
      rejectWithValue(e.message);
    }
  }
});
