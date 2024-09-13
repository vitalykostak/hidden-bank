import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum AppNavigation {
  home = 'home',
}

export type NavigationStackLists = {
  [AppNavigation.home]: {};
};

export type AppScreenProps<T extends keyof NavigationStackLists> = {
  route: RouteProp<NavigationStackLists, T>;
  navigation: NativeStackNavigationProp<NavigationStackLists, T>;
};
