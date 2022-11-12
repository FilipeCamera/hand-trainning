import { StyleSheet } from 'react-native';

const styles = (value: number) =>
  StyleSheet.create({
    container: {
      marginVertical: value,
    },
  });

export default styles;
