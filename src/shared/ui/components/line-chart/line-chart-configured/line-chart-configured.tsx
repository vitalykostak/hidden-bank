import { FC } from 'react';
import { Dimensions, ViewStyle } from 'react-native';
import { LineChart as LineChartKit } from 'react-native-chart-kit';
import { styles } from './styles';

export type LineChartConfiguredProps = {
  labels?: string[];
  data: number[];
  width?: number;
  height?: number;
  yAxisPostfix?: string;
  yAxisSuffix?: string;
  containerStyle?: ViewStyle;
  withDots?: boolean;
  withInnerLines?: boolean;
  withVerticalLines?: boolean;
  loading: false;
};

export const LineChartConfigured: FC<LineChartConfiguredProps> = props => {
  const {
    width = Dimensions.get('window').width - 32,
    height = 220,
    labels = [],
    data,
    yAxisPostfix,
    yAxisSuffix,
    containerStyle,
    withDots = true,
    withInnerLines = true,
    withVerticalLines = true,
  } = props;

  return (
    <LineChartKit
      data={{
        labels,
        datasets: [
          {
            data,
          },
        ],
      }}
      withDots={withDots}
      withInnerLines={withInnerLines}
      withVerticalLines={withVerticalLines}
      width={width}
      height={height}
      yAxisLabel={yAxisPostfix}
      yAxisSuffix={yAxisSuffix}
      yAxisInterval={1}
      chartConfig={{
        backgroundColor: 'green',
        backgroundGradientFrom: '#3C3B3F',
        backgroundGradientTo: '#605C3C',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: styles.chartConfigStyle,
        propsForDots: {
          r: '4',
          strokeWidth: '2',
          stroke: '#605C3C',
        },
      }}
      bezier
      style={{ ...styles.container, ...containerStyle }}
    />
  );
};
