import { CurrencyRate } from '@/features/currency-rate';
import { CurencyRateChart } from '@/features/currency-rate-chart';
import {
  CurrencySelector,
  useCurrencyValue,
} from '@/features/currency-selector';
import { AppNavigation, AppScreenProps } from '@/shared/config/navigation';
import { ScreenLayout } from '@/shared/ui/layouts/screen-layout';
import { FC } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export const Home: FC<AppScreenProps<AppNavigation.home>> = () => {
  const currency = useCurrencyValue();

  return (
    <ScreenLayout contentStyle={styles.layoutContent}>
      <View style={styles.currencySelectorContainer}>
        <CurrencySelector />
        <CurrencyRate currency={currency} />
      </View>
      <View style={styles.currencyRateChartContainer}>
        <CurencyRateChart currency={currency} />
      </View>
    </ScreenLayout>
  );
};
