import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

type Props = {
  task: string;
  onRemove: () => void;
};

export function Tasks({ task, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.task}>{task}</Text>

      <TouchableOpacity style={styles.img} onPress={onRemove}>
        <Image source={require('../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  );
}
