import { Currency } from '@/entities/currency';
import { useAppDispatch } from '@/shared/lib/store';
import { useEffect } from 'react';
import {
  useCurrencyRates,
  useDatePeriod,
  useLoading,
} from '../../model/selectors';
import { getCurrencyRate } from '../../model/services';

export const useCurrencyRate = (currency: Currency) => {
  const dispatch = useAppDispatch();

  const loading = useLoading();
  const rates = useCurrencyRates();
  const datePeriod = useDatePeriod();

  useEffect(() => {
    dispatch(getCurrencyRate(currency));
  }, [dispatch, currency, datePeriod]);

  return { loading, rates };
};
