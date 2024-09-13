import { Currency } from '../types';
import { formatCurrencyRate } from './formatters/format-currency-rate';
type FormattetStrategy = (rate: number) => string;

const currencyFormattetStrategies: Record<Currency, FormattetStrategy> = {
  [Currency.usd]: rate => formatCurrencyRate(rate, '$'),
  [Currency.eur]: rate => formatCurrencyRate(rate, '€'),
  [Currency.gbp]: rate => formatCurrencyRate(rate, '£'),
  [Currency.jpy]: rate => formatCurrencyRate(rate, '¥'),
  [Currency.cny]: rate => formatCurrencyRate(rate, '元'),
  [Currency.uah]: rate => formatCurrencyRate(rate, '₴'),
};

export const createCurrencyFormatter = (currency: Currency) =>
  currencyFormattetStrategies[currency];
