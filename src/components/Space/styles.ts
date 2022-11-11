import { StyleSheet } from 'react-native';

export const styles = (value: number) =>
  StyleSheet.create({
    container: {
      marginVertical: value,
    },
  });
