// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import SelectCarScreen from './components/SelectCarScreen';
import CarDetailsScreen from './components/CarDetailsScreen';
import PurchaseScreen from './components/PurchaseScreen';
import SuccessScreen from './components/SuccessScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Bem-vindo" component={LoginScreen} />
        <Stack.Screen name="SelectCar" component={SelectCarScreen} />
        <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
        <Stack.Screen name="Purchase" component={PurchaseScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
