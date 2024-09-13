export type CurrencyRateInfo = {
  rate: number;
  exchangedate: string;
};

export const enum Currency {
  usd = 'usd',
  eur = 'eur',
  gbp = 'gbp',
  jpy = 'jpy',
  cny = 'cny',
  uah = 'uah',
}
