import { Currency } from '@/entities/currency';

export const options: { title: string; value: Currency }[] = [
  { title: Currency.usd, value: Currency.usd },
  { title: Currency.eur, value: Currency.eur },
  { title: Currency.gbp, value: Currency.gbp },
  { title: Currency.jpy, value: Currency.jpy },
  { title: Currency.cny, value: Currency.cny },
];
