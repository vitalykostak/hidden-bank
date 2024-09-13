import { Shimmer } from '@/shared/ui/kit/shimmer';
import { Text } from '@/shared/ui/kit/text';
import { FC } from 'react';
import { styles } from './styles';

type Props = { rate: string; loading: boolean };

export const CurrencyRateDisplay: FC<Props> = props => {
  const { rate, loading } = props;

  if (loading) {
    return <Shimmer width={50} height={20} containerStyle={styles.loader} />;
  }

  const value = rate.split('.');

  return (
    <Text style={styles.rate}>
      {value[0]}.<Text style={styles.decimals}>{value[1]}</Text>
    </Text>
  );
};
