import { getCurrencyRatesForDatePeriod } from '@/shared/api/currency-repository';
import dayjs from 'dayjs';
import { CurrencyDatePeriod, CurrencyRateFetchStrategy } from './types';

export const currencyRateFetchStrategies: {
  [key in CurrencyDatePeriod]: CurrencyRateFetchStrategy;
} = {
  [CurrencyDatePeriod.oneWeek]: currency =>
    getCurrencyRatesForDatePeriod({
      start: dayjs().subtract(1, 'week').toDate(),
      end: dayjs().toDate(),
      currency,
    }),
  [CurrencyDatePeriod.twoWeeks]: currency =>
    getCurrencyRatesForDatePeriod({
      start: dayjs().subtract(2, 'weeks').toDate(),
      end: dayjs().toDate(),
      currency,
    }),
  [CurrencyDatePeriod.oneMonth]: currency =>
    getCurrencyRatesForDatePeriod({
      start: dayjs().subtract(1, 'month').toDate(),
      end: dayjs().toDate(),
      currency,
    }),
  [CurrencyDatePeriod.threeMonths]: currency =>
    getCurrencyRatesForDatePeriod({
      start: dayjs().subtract(3, 'months').toDate(),
      end: dayjs().toDate(),
      currency,
    }),
  [CurrencyDatePeriod.sixMonths]: currency =>
    getCurrencyRatesForDatePeriod({
      start: dayjs().subtract(6, 'months').toDate(),
      end: dayjs().toDate(),
      currency,
    }),
  [CurrencyDatePeriod.oneYear]: currency =>
    getCurrencyRatesForDatePeriod({
      start: dayjs().subtract(1, 'year').toDate(),
      end: dayjs().toDate(),
      currency,
    }),
  [CurrencyDatePeriod.twoYear]: currency =>
    getCurrencyRatesForDatePeriod({
      start: dayjs().subtract(2, 'years').toDate(),
      end: dayjs().toDate(),
      currency,
    }),
  [CurrencyDatePeriod.fourYear]: currency =>
    getCurrencyRatesForDatePeriod({
      start: dayjs().subtract(4, 'years').toDate(),
      end: dayjs().toDate(),
      currency,
    }),
};
