import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Tasks } from '../../components/tasks/Tasks';
import { styles } from './styles';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleTaskAdd() {
    if (tasks.includes(taskName)) {
      return Alert.alert(
        'Tarefa já existe',
        'Já existe uma tarefa na lista com este nome.'
      );
    }
    setTasks(prevState => [...prevState, taskName]);
    setTaskName('');
  }

  function handleTaskRemove(task: string) {
    Alert.alert('Remover', `Remover a tarefa ${task}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setTasks(prevState => prevState.filter(item => item !== task))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
    console.log(`Voce clicou em remover a tarefa ${task}`);
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Image source={require('../../../assets/buttonPlus.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerInfoDetail}>
          <Text style={styles.textInfo}>Criadas</Text>
          <Text style={styles.textCount}>0</Text>
        </View>

        <View style={styles.containerInfoDetail}>
          <Text style={styles.textInfo}>Concluídas</Text>
          <Text style={styles.textCount}>0</Text>
        </View>
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.line}></View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Tasks
            key={item}
            task={item}
            onRemove={() => handleTaskRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.containerEmpty}>
            <Image
              source={require('../../../assets/clipboard.png')}
              style={styles.logoEmpty}
            />
            <Text style={[styles.listEmptyText, { fontWeight: 'bold' }]}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
