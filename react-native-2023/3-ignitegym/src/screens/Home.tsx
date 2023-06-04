import { HomeHeader } from '@components/HomeHeader';
import { VStack, Text } from 'native-base';

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
    </VStack>
  );
}
