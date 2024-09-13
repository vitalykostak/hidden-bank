import { Dimensions } from 'react-native';
import {
  LineChartConfigured,
  LineChartConfiguredProps,
} from './line-chart-configured/line-chart-configured';
import {
  LineChartLoader,
  LineChartLoaderProps,
} from './line-chart-loader/line-chart-loader';

type Props = LineChartConfiguredProps | LineChartLoaderProps;

export const LineChart = (props: Props) => {
  const {
    loading,
    width = Dimensions.get('window').width - 32,
    height = 220,
  } = props;

  if (loading) {
    return <LineChartLoader width={width} height={height} loading />;
  }

  return <LineChartConfigured {...props} />;
};
