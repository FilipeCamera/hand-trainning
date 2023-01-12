import { StyleSheet } from 'react-native';

const styles = (value: number, direction = 'vertical') =>
  StyleSheet.create({
    container: direction === 'vertical' ? { marginVertical: value } : { marginHorizontal: value },
  });

export default styles;
