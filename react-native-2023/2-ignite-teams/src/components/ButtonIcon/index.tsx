import { Container, Icon } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {};

export function ButtonIcon() {
  return (
    <Container>
      <Icon name="home" type="PRIMARY" />
    </Container>
  );
}
