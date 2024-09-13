import { currencyRateReducer } from '@/features/currency-rate-chart';
import { currencySelectorReducer } from '@/features/currency-selector';
import { StateSchema } from '@/shared/config/store/types';
import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';

export const createStore = () => {
  const rootReducers: Reducer<StateSchema> = combineReducers({
    currency: currencySelectorReducer,
    currencyRate: currencyRateReducer,
  });

  const store = configureStore({
    reducer: rootReducers,
  });

  return store;
};

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
