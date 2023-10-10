import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginScreen from './src/pages/LoginPage/LoginScreen';
import RegisterScreen from './src/pages/RegisterPage/RegisterScreen';
import ForgotPasswordScreen from './src/pages/ForgotPasswordPage/ForgotPasswordScreen';
import HomeScreen from './src/pages/HomePage/HomeScreen';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
