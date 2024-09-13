import { $currencyApi } from './api';
import { CurrencyRateDto } from './types';

export const getCurrencyRate = async (currency: string) => {
  const params = {
    valcode: currency,
    json: true,
  };

  const res = await $currencyApi.get<CurrencyRateDto[]>('/exchange_site', {
    params,
  });

  return res.data?.[0];
};
