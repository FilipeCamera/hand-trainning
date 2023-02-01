import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import GoogleIcon from '../../assets/svg/google.svg';
import FacebookIcon from '../../assets/svg/facebook.svg';
import styles from './styles';
import { ArrowRightIcon } from '../../constants';

type ButtonProps = {
  title: string;
  secundary?: boolean;
  common?: boolean;
  marginVertical?: number;
  icon?: any;
} & TouchableOpacityProps;

type ButtonOutlineProps = {
  title: string;
  facebook?: boolean;
  google?: boolean;
} & TouchableOpacityProps;

const Button = ({ title, secundary, icon, common, marginVertical, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity {...props} style={styles(secundary, common, marginVertical, icon).container}>
      {icon ? icon : <Text style={styles(secundary, common).text}>{title}</Text>}
    </TouchableOpacity>
  );
};

const ButtonOutline = ({ title, google, facebook, ...props }: ButtonOutlineProps) => {
  return (
    <TouchableOpacity {...props} style={styles().container_outline}>
      {!!facebook && <FacebookIcon style={styles().icon} />}
      {!!google && <GoogleIcon style={styles().icon} />}
      <Text style={styles().text_outline}>{title}</Text>
    </TouchableOpacity>
  );
};

const ButtonRounded = ({ title, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles().container_rounded} {...props}>
      <Text style={styles().button_rounded_text}>{title}</Text>
      <ArrowRightIcon />
    </TouchableOpacity>
  );
};

export { Button, ButtonOutline, ButtonRounded };
