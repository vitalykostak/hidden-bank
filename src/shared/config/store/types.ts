import { CurrencyRateSchema } from '@/features/currency-rate-chart';
import { CurrencySelectorSchema } from '@/features/currency-selector';

export type StateSchema = {
  currency: CurrencySelectorSchema;
  currencyRate: CurrencyRateSchema;
};
