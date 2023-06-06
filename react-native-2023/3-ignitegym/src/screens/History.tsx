import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';
import { VStack } from 'native-base';

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  );
}
