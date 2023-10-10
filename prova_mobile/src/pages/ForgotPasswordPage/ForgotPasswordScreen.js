import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');


  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
      <Text>Recuperação de Senha</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Enviar Email de Recuperação" style={styles.button} onPress={handleForgotPassword} />
      <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
        Lembrou sua senha? Faça login aqui.
      </Text>
    </View>
  );
}

export default ForgotPasswordScreen;
