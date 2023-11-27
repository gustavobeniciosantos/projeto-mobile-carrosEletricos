import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Imagem from '../assets/Logo.png';

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate('SelectCar');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 35,
      width: '100%',
      marginHorizontal: 'auto',
    },
    text: {
      paddingBottom: 100,
      fontSize: 40,
      fontWeight: 'bold',
      color: '#211e1f',
      alignContent: 'center',
    },
    textButton: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
    },
    button: {
      backgroundColor: '#51ADA8',
      paddingVertical: 10,
      width: '60%',
      borderRadius: 5,
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Image source={Imagem} style={{ width: 300, height: 120 }} />
      <Text style={styles.text}>Seja bem-vindo!</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
