import { Currency, CurrencyRateDisplay } from '@/entities/currency';
import { FC } from 'react';
import { useCurrencyRate } from '../lib/hooks/use-currency-rate';

type Props = { currency: Currency };

export const CurrencyRate: FC<Props> = props => {
  const { currency } = props;

  const { rate, loading } = useCurrencyRate(currency);

	return <CurrencyRateDisplay loading={ loading} rate={rate} />;

};
