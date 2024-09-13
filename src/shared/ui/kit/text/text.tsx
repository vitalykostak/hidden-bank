import { FC } from 'react';
import { Text as PaperText, TextProps } from 'react-native-paper';

export const Text: FC<TextProps<never>> = props => <PaperText {...props} />;
