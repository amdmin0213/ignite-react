import { useState } from 'react';
import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';
import { Heading, VStack, SectionList } from 'native-base';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '26.08.23',
      data: ['Puxada', 'Burger', 'Risotto']
    },
    {
      title: '29.08.23',
      data: ['French Fries']
    }
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
      />
    </VStack>
  );
}
