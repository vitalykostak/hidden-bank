import dayjs from 'dayjs';
import { $currencyApi } from './api';
import { CurrencyRateDto } from './types';

type GetCurrencyRatesForDatePeriodProps = {
  start: Date;
  end: Date;
  currency: string;
};

export const getCurrencyRatesForDatePeriod = async (
  props: GetCurrencyRatesForDatePeriodProps,
) => {
  const { start, end, currency } = props;

  const params = {
    start: dayjs(start).format('YYYYMMDD'),
    end: dayjs(end).format('YYYYMMDD'),
    valcode: currency,
    sort: 'exchangedate',
    order: 'asc',
    json: true,
  };

  const res = await $currencyApi.get<CurrencyRateDto[]>('/exchange_site', {
    params,
  });

  return res.data;
};
