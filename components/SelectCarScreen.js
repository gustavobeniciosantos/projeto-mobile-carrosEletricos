// SelectCarScreen.js
import React from 'react';
import Imagem from '../assets/E-tron.png';
import Imagem1 from '../assets/Modelx.png';
import Imagem2 from '../assets/Nissan.png';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';


const carsData = [
  { id: '1', name: 'E-tron', image: Imagem, valorPorDia: 50},
  { id: '2', name: 'Model X', image: Imagem1, valorPorDia: 60},
  { id: '3', name: 'Nissan', image: Imagem2, valorPorDia: 70},
];

export default function SelectCarScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 35,
      width: '100%',
      marginHorizontal: 'auto',
    },
    itemBox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      marginHorizontal: 'auto',
      padding: 20,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
    }, 
    text: {
      paddingTop: 20,
      fontSize: 25,
      fontWeight: 'bold',
      color: '#211e1f',
    }, 
    textButton: {
      paddingTop: 1,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    button: {
      backgroundColor: '#034464',
      paddingVertical: 10,
      width: '100%',
      borderRadius: 5,
      alignItems: 'center',
    },
    flatBox: {
      gap: 10,
    }
    }
  )

  const handleCarSelection = (car) => {
    navigation.navigate('CarDetails', { car });
  };

  const renderCarItem = ({ item }) => (
    <View style={styles.itemBox}>
      <Image source={item.image} style={{ width: 200, height: 120 }} />
      <Text>{item.name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleCarSelection(item)}><Text style={styles.textButton}>Ver detalhes</Text></TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selecione o carro desejado:</Text>
      <FlatList contentContainerStyle={styles.flatBox}
        data={carsData}
        keyExtractor={(item) => item.id}
        renderItem={renderCarItem}
      />
    </View>
  );
}