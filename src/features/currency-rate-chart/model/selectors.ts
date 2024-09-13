import { buildSelector } from '@/shared/lib/store';

export const [useDatePeriod] = buildSelector(
  state => state.currencyRate.datePeriod,
);
export const [useLoading] = buildSelector(state => state.currencyRate.loading);
export const [useCurrencyRates] = buildSelector(
  state => state.currencyRate.rates,
);
