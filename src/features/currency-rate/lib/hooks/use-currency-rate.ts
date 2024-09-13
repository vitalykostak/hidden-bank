import {
  Currency,
  CurrencyRateInfo,
  createCurrencyFormatter,
} from '@/entities/currency';
import { getCurrencyRate } from '@/shared/api/currency-repository';
import { useEffect, useState } from 'react';

export const useCurrencyRate = (currency: Currency) => {
  const [rate, setRate] = useState<CurrencyRateInfo>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getCurrencyRate(currency)
      .then(r => setRate(r))
      .finally(() => setLoading(false));
  }, [currency]);

  const format = createCurrencyFormatter(Currency.uah);

  return { rate: format(rate?.rate || 0), loading };
};
