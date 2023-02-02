import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Participant } from '../../components/Participant';

export function Home() {
  function handleParticipantAdd() {
    console.log('Voce clicou no botão de adicionar');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Segunda, 16 de Janeiro 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />
    </View>
  );
}
