import { FC } from 'react';
import { ViewStyle } from 'react-native';
import RNShimmer, { ShimmerProps } from 'react-native-shimmer';
import { Text } from '../text';
import { styles } from './styles';

export const Shimmer: FC<
  ShimmerProps & { containerStyle?: ViewStyle; width: number; height: number }
> = props => {
  const {
    width,
    height,

    containerStyle,
    duration = 400,
    pauseDuration = 1000,
    animating = true,
    ...others
  } = props;

  return (
    <RNShimmer
      style={[{ width, height }, styles.container, containerStyle]}
      duration={duration}
      pauseDuration={pauseDuration}
      animating={animating}
      {...others}>
      <Text style={[{ width, height }, styles.shimmmer]}>{''}</Text>
    </RNShimmer>
  );
};
