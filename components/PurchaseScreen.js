// PurchaseScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function PurchaseScreen({ route, navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 35,
        width: '100%',
        marginHorizontal: 'auto',
    },
    button: {
      backgroundColor: '#034464',
        paddingVertical: 10,
        width: '80%',
        borderRadius: 5,
        alignItems: 'center',
    },
    textButton: {
      paddingTop: 1,
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
    },
    textBox: {
      fontSize: 18,
      fontWeight: 'Montserrat',
      color: 'black',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#211e1f',
    },
  }
  )
  const { car } = route.params;
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [dateType, setDateType] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedCar, setSelectedCar] = useState(car);
  const [totalCost, setTotalCost] = useState(0);

  const calculateTotalCost = () => {
    if (pickupDate && returnDate) {
      const timeDifference = returnDate.getTime() - pickupDate.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
      return daysDifference;
    }
    return 0;
  };
  

  const showDatepicker = (dateType) => {
    setShowDatePicker(true);
    setDateType(dateType);
  };

  const handleConfirmRent = () => {
  const daysDifference = calculateTotalCost();

  if (selectedCar && daysDifference > 0) {
    const total = daysDifference * selectedCar.valorPorDia;
    setTotalCost(total);

    const message = `Carro alugado com sucesso!`;

    navigation.navigate('Success', {
      message,
      total,
      pickupDate: pickupDate ? pickupDate.toDateString() : 'N/A',
      returnDate: returnDate ? returnDate.toDateString() : 'N/A',
    });
  } else {
    console.log('teste');
  }
};


  const onChange = (event, selectedDate, type) => {
    setShowDatePicker(false);
    if (selectedDate) {
      if (type === 'pickup') {
        setPickupDate(selectedDate);
      } else if (type === 'return') {
        setReturnDate(selectedDate);
      }
    }
  };

  const handlePurchase = () => {
  handleConfirmRent();
};


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{selectedCar.name}</Text>
      <Text style={styles.textBox}>Valor por dia: R$ {selectedCar.valorPorDia.toFixed(2)}</Text>

      <Text style={styles.textBox}>Selecione as datas de retirada e devolução</Text>

      <TouchableOpacity style={styles.button}
        onPress={() => showDatepicker('pickup')}><Text style={styles.textButton}>{`Retirada: ${pickupDate ? pickupDate.toDateString() : 'Selecionar Data'}`}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => showDatepicker('return')}><Text style={styles.textButton}>{`Devolução: ${returnDate ? returnDate.toDateString() : 'Selecionar Data'}`}</Text></TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker value={new Date()} mode="date" display="default" onChange={(event, selectedDate) => onChange(event, selectedDate, dateType)} />
      )}

      <TouchableOpacity style={styles.button} onPress={handlePurchase}><Text style={styles.textButton}>Confirmar compra</Text></TouchableOpacity>
    </View>
  );
}
