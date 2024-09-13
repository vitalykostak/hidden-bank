import { View, ViewStyle } from 'react-native';
import { Text } from '../../kit/text';
import { styles } from './styles';

export type Option<T extends string> = {
  label: string;
  value: T;
};

type Props<T extends string> = {
  options: Option<T>[];
  value: T;
  onChangeValue: (value: T) => void;
  containerStyle?: ViewStyle;
};

export const SelectionToolbar = <T extends string>(props: Props<T>) => {
  const { value, options, onChangeValue, containerStyle } = props;

  const handleChange = (option: Option<T>) => {
    if (option.value !== value) {
      onChangeValue(option.value);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {options.map(option => (
        <Text
          onPress={() => handleChange(option)}
          style={[styles.option, option.value === value && styles.activeOption]}
          key={option.value}>
          {option.label}
        </Text>
      ))}
    </View>
  );
};
