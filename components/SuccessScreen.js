// SuccessScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SuccessScreen({ route }) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 200,
      flex: 1,
      gap: 20,
      alignItems: 'center',
      width: '100%',
      marginHorizontal: 'auto',
    },
    text: {
      fontSize: 25,
      fontWeight: 'Arial',
      color: 'black',
      textAlign: 'center',
    },
    
  }
  );

      const { message, total, pickupDate, returnDate } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Text style={styles.text}>Valor do aluguel: R$ {total.toFixed(2)}</Text>
      <Text style={styles.text}>Data de retirada: {pickupDate}</Text>
      <Text style={styles.text}>Data de devolução: {returnDate}</Text>
    </View>
  );
}
