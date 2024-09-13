import {
  DefaultTheme,
  MenuItemProps,
  Menu as MenuPaper,
  MenuProps,
} from 'react-native-paper';
import { InternalTheme } from 'react-native-paper/lib/typescript/types';

export const Menu = (
  props: Omit<MenuProps, 'theme'> & { theme?: InternalTheme },
) => (
  <MenuPaper
    theme={{
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        elevation: {
          ...DefaultTheme.colors.elevation,
          level2: DefaultTheme.colors.background,
        },
      },
    }}
    {...props}
  />
);

Menu.Item = (props: MenuItemProps) => <MenuPaper.Item {...props} />;
