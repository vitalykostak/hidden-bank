import { CurrencyRateInfo } from '@/entities/currency';

export const enum CurrencyDatePeriod {
  oneWeek = 'oneWeek',
  twoWeeks = 'twoWeeks',
  oneMonth = 'oneMonth',
  threeMonths = 'threeMonths',
  sixMonths = 'sixMonths',
  oneYear = 'oneYear',
  twoYear = 'twoYear',
  fourYear = 'fourYear',
}

export type CurrencyRateFetchStrategy = (
  currency: string,
) => Promise<CurrencyRateInfo[]>;

export type CurrencyRateSchema = {
  loading: boolean;
  error?: string;
  rates: CurrencyRateInfo[];
  datePeriod: CurrencyDatePeriod;
};
