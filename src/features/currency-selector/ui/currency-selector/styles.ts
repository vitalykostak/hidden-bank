import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  anchorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  anchor: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  anchorIcon: {
    transform: [{ scaleY: -1 }],
  },
  option: {
    textTransform: 'uppercase',
  },
});
