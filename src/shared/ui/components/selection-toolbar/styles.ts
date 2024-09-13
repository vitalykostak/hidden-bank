import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  option: {
    fontSize: 12,
    fontWeight: 'bold',
    padding: 4,
  },
  activeOption: {
    color: 'green',
    textDecorationLine: 'underline',
  },
});
