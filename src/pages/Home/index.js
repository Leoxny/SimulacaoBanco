import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, {useState} from 'react';
import Header from '../../componnents/Header'
import Balance from '../../componnents/Balance';
import Movements from '../../componnents/Movements';
import Actions from '../../componnents/Actions';

const list = [
  {
  id: 1,
  label: 'Boleto conta luz',
  value: '300,90',
  date: '17/09/2022',
  type: 0 // despesas
  },

  {
    id: 2,
    label: 'Pix cliente X',
    value: '2.500,00',
    date: '22/09/2022',
    type: 1 // receuta /entradas
  },

  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '28/09/2022',
    type: 1 // receuta /entradas
  },
  
]


export default function App() {

  return (
    <View style={styles.container}>
      <Header name="Leonardo Flach"/>

      <Balance saldo="9,250,90" gastos="-527,00"/>

      <Actions/>

      <Text style={styles.title}>últimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
