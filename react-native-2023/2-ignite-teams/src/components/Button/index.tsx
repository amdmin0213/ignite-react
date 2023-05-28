import { Container } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ ...rest }: Props) {
  return <Container {...rest}></Container>;
}
