import { LinearGradient } from 'expo-linear-gradient';
import THEME from '../../styles/theme';
import styles from './styles';

const LinearBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={[THEME.LINEAR_GRADIENT_COLOR.START, THEME.LINEAR_GRADIENT_COLOR.END]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

export { LinearBackground };
