import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import styles from './styles';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
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
      <Button title="Login" style={styles.button} onPress={handleLogin} />
      <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}>
        Não possui uma conta? Registre-se aqui.
      </Text>
      <Text style={styles.linkText} onPress={() => navigation.navigate('ForgotPassword')}>
        Esqueceu sua senha? Clique aqui.
      </Text>
    </View>
  );
}

export default LoginScreen;
