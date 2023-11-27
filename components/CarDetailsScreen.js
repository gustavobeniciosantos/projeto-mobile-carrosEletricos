
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CarDetailsScreen({ route, navigation }) {
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
        width: '50%',
        borderRadius: 5,
        alignItems: 'center',
      },
      textButton: {
        paddingTop: 1,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
      },
      itemBox:{
        alignItems: 'center',
        padding: 20,
        gap: 35,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
      },
      textBox: {
        fontSize: 20,
        fontWeight: 'Montserrat',
        color: 'black',
      }
    }
  )

  const { car } = route.params;
  
  const carDetails = [
    { id: '1', color: 'Cor: Azul', MaxSpeed: '200km/h', door: '4 portas' },
    { id: '2', color: 'Cor: Verde', MaxSpeed: '250km/h', door: '4 portas' },
    { id: '3', color: 'Cor: Vermelho', MaxSpeed: '180km/h', door: '4 portas' },
    ];

    const selectedCar = carDetails.find(carDetail => carDetail.id===car.id)

  const handleRent = () => {
    navigation.navigate('Purchase', { car });
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemBox}>
        <Image source={car.image} style={{ width: 300, height: 200 }} />
        <Text style={styles.textBox}>{car.name}</Text>
        <Text style={styles.textBox}>{selectedCar.color}</Text>
        <Text style={styles.textBox}>{selectedCar.door}</Text>
        <TouchableOpacity style={styles.button} onPress={handleRent}><Text style={styles.textButton}>Alugar</Text></TouchableOpacity>
      </View>
    </View>
    
  );
}
