import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './styles';

function HomeScreen({ navigation }) {
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    
    <View style={styles.container}>
    <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
      <Text style={styles.welcomeText}>Bem-vindo à tela inicial</Text>
      <Button title="Sair" style={styles.button} onPress={handleLogout} />
    </View>
  );
}

export default HomeScreen;
