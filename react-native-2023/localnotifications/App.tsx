import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles';
import notifee, {
  AndroidImportance,
  EventType,
  TimestampTrigger,
  TriggerType
} from '@notifee/react-native';

export default function App() {
  async function createChannelId() {
    const channelId = await notifee.createChannel({
      id: 'teste',
      name: 'Vendas',
      vibration: true,
      importance: AndroidImportance.HIGH
    });

    return channelId;
  }

  async function displayNotification() {
    await notifee.requestPermission();

    const channelId = await createChannelId();

    await notifee.displayNotification({
      id: '7',
      title: 'Olá, <strong>Diegooooooooo!</strong> 🤳',
      body: 'Esta é a minha primeira <span style="color:red;">notificação</span>.',
      android: { channelId }
    });
  }

  async function updateNotification() {
    await notifee.requestPermission();

    const channelId = await createChannelId();

    await notifee.displayNotification({
      id: '7',
      title: 'Olá, <strong>Diego!</strong> 🤳',
      body: 'Esta é a minha primeira <span style="color:red;">notificação</span>.',
      android: { channelId }
    });
  }

  async function cancelNotification() {
    await notifee.cancelNotification('7');
  }

  async function scheduleNotification() {
    const date = new Date(Date.now());
    date.setMinutes(date.getMinutes() + 1);

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime()
    };

    const channelId = await createChannelId();

    await notifee.createTriggerNotification(
      {
        title: 'Notificação Agendada',
        body: 'Esta é uma notificação agendada',
        android: { channelId }
      },
      trigger
    );
  }

  async function listScheduleNotifications() {
    await notifee.getTriggerNotificationIds().then(ids => console.log(ids));
  }

  useEffect(() => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('Usuário descartou a notificação!');
          break;
        case EventType.ACTION_PRESS:
          console.log('Usuário tocou na notificação!', detail.notification);
      }
    });
  }, []);

  useEffect(() => {
    return notifee.onBackgroundEvent(async ({ type, detail }) => {
      if (type === EventType.PRESS) {
        console.log('Usuário tocou na notificação!', detail.notification);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Local Notifications</Text>
      <Button title={'Enviar Notificação'} onPress={displayNotification} />
      <Button title={'Atualizar Notificação'} onPress={updateNotification} />
      <Button title={'Cancelar Notificação'} onPress={cancelNotification} />
      <Button title={'Agendar Notificação'} onPress={scheduleNotification} />
      <Button
        title={'Listar Notificações Agendadas'}
        onPress={listScheduleNotifications}
      />
    </View>
  );
}
