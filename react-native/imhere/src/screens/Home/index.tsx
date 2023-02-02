import { Text, View } from 'react-native';
import { styles } from './style';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Segunda, 16 de Janeiro 2023</Text>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Segunda, 16 de Janeiro 2023</Text>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Segunda, 16 de Janeiro 2023</Text>
    </View>
  );
}
