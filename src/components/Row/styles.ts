import { StyleSheet } from 'react-native';

export type StyleRowProps = {
  justify?:
    | 'space-between'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly';
};

export const styles = ({ justify = 'space-between' }: StyleRowProps) =>
  StyleSheet.create({
    container: {
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: justify,
    },
  });
