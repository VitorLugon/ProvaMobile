import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import styles from './styles';

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Registrar" style={styles.button} onPress={handleRegister} />
      <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
        Já possui uma conta? Faça login aqui.
      </Text>
    </View>
  );
}

export default RegisterScreen;
