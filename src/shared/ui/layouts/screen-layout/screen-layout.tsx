import { FC, PropsWithChildren } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

type ScreenLayoutProps = {
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  bounces?: boolean;
};

export const ScreenLayout: FC<PropsWithChildren<ScreenLayoutProps>> = props => {
  const { children, containerStyle, contentStyle, bounces = false } = props;

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
        containerStyle,
      ]}>
      <ScrollView
        contentContainerStyle={[styles.scrollViewContainer, contentStyle]}
        bounces={bounces}>
        {children}
      </ScrollView>
    </View>
  );
};
