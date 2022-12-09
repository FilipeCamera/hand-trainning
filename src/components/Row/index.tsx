import { View } from 'react-native';

import { styles, StyleRowProps } from './styles';

type RowProps = StyleRowProps & {
  children: any;
};

const Row = ({ children, justify }: RowProps) => {
  return <View style={styles({ justify }).container}>{children}</View>;
};

export { Row };
