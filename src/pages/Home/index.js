import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../componnents/Header'
import Balance from '../../componnents/Balance';
import Movements from '../../componnents/Movements';
import Actions from '../../componnents/Actions';
import { AppContext } from '../../context/AppContext';

import { styles } from './styles';

export default function App() {

  const { list } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Header name="Leonardo Flach" />

      <Balance saldo="9,250,90" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}>últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

