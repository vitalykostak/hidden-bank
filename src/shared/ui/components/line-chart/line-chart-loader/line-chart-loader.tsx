import { FC } from 'react';

import { Shimmer } from '@/shared/ui/kit/shimmer';

export type LineChartLoaderProps = {
  loading: true;
  width?: number;
  height?: number;
};

export const LineChartLoader: FC<LineChartLoaderProps> = props => {
  const { width, height } = props;

  return <Shimmer width={width || 0} height={height || 0} />;
};
