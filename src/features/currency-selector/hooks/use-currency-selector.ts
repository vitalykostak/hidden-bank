import { useAppDispatch } from '@/shared/lib/store';
import { useCallback } from 'react';
import { currencySelectorActions } from '../model/slice';

export const useCurrencySelector = () => {
  const dispatch = useAppDispatch();

  const currencyChanged = useCallback(
    (currency: string) => dispatch(currencySelectorActions.setValue(currency)),
    [dispatch],
  );

  return {currencyChanged};
};
