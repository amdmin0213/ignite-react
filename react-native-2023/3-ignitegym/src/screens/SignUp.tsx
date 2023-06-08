import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LogoSvg from '@assets/logo.svg';

import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
export function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSingnUp() {
    console.log({ name, email, password, passwordConfirm });
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Input placeholder="Nome" onChangeText={setName} />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            secureTextEntry
            onChangeText={setPassword}
          />
          <Input
            placeholder="Confirmar senha"
            secureTextEntry
            onChangeText={setPasswordConfirm}
          />
          <Button title="Criar e acessar" onPress={handleSingnUp} />
        </Center>

        <Button
          mt={24}
          title="Voltar para o Login"
          variant="outline"
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
