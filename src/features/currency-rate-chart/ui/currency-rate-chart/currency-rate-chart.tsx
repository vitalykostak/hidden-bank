import { Currency } from '@/entities/currency';
import { LineChart } from '@/shared/ui/components/line-chart';
import { FC, memo } from 'react';
import { View } from 'react-native';
import { useCurrencyRate } from '../../lib/hooks/use-currency-rate';
import { PeriodSelectionToolbar } from '../period-selection-toolbar/period-selection-toolbar';
import { styles } from './styles';

type Props = {
  currency: Currency;
};

export const CurencyRateChart: FC<Props> = memo(props => {
  const { currency } = props;

  const { loading, rates } = useCurrencyRate(currency);

  return (
    <View style={styles.container}>
      <PeriodSelectionToolbar />
      {loading || !rates.length ? (
        <LineChart loading={true} />
      ) : (
        <LineChart
          loading={false}
          data={rates.map(rate => rate.rate)}
          withDots={false}
          withInnerLines={true}
          withVerticalLines={false}
        />
      )}
    </View>
  );
});
