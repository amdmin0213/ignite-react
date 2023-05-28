import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;
