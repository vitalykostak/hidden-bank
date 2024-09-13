import { Menu } from '@/shared/ui/kit/menu';
import { memo, useState } from 'react';

import { ChevronIcon } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Pressable } from 'react-native';
import { useCurrencyValue } from '../..';
import { useCurrencySelector } from '../../hooks/use-currency-selector';
import { options } from './constants';
import { styles } from './styles';

export const CurrencySelector = memo(() => {
  const [visible, setVisible] = useState<boolean>(false);
  const open = () => setVisible(true);
  const close = () => setVisible(false);
  const currency = useCurrencyValue();

  const { currencyChanged } = useCurrencySelector();

  const anchorTitle =
    options.find(option => option.value === currency)?.title || '';

  return (
    <Menu
      visible={visible}
      onDismiss={close}
      anchorPosition="bottom"
      anchor={
        <Pressable style={styles.anchorContainer} onPress={open}>
          <Text style={styles.anchor}>{anchorTitle}/UAH</Text>
          <ChevronIcon style={styles.anchorIcon} width={10} height={10} />
        </Pressable>
      }>
      {options.map(option => (
        <Menu.Item
          titleStyle={styles.option}
          key={option.value}
          title={option.title}
          onPress={() => {
            currencyChanged(option.value);
            close();
          }}
          disabled={currency === option.value}
        />
      ))}
    </Menu>
  );
});
