import React, { useContext, useRef, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../componnents/Header'
import Balance from '../../componnents/Balance';
import Movements from '../../componnents/Movements';
import Actions from '../../componnents/Actions';
import { AppContext } from '../../context/AppContext';
import { Modalize } from 'react-native-modalize';
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles';
import { TextInput } from 'react-native-gesture-handler';
//import {listaPreenchida} from '../../context/AppContext'

export default function App() {

  const { list, filterList, saveList } = useContext(AppContext);
  const [input, setInput] = useState('')
  const [valor, setValor] = useState('')
  const modalizeRef = useRef(null);


  function handleAdd() {
    // if (input === '') return

    // if (valor === '') return

    // const data = {
    //   key: input,
    //   list: input
    // }

    const itemTeste = {
      id: 4,
      category: 4,
      label: 'Pagamento ao banco',
      value: '4.500,00',
      date: '11/05/2022',
      type: 0 // receita /entradas
    }

    saveList(itemTeste);

  }


  const onOpen = () => {
    modalizeRef.current?.open();
  };


  return (
    <View style={styles.container}>
      <Header name="Leonardo Flach" />

      <Balance saldo="10.500,00" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />

      <TouchableOpacity onPress={onOpen} style={styles.fab}>
        <Ionicons name="ios-add" size={35} color="#fff" />
      </TouchableOpacity>

      <Modalize
        ref={modalizeRef}
        snapPoint={500}
      >
        <View style={{
          flex: 1,
          height: 180,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        </View>

        <TouchableOpacity>
          <View>
            <Text style={styles.text}>Movimentações</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Adicionar movimentações"
              useNativeDriver
              multiline={true}
              autoCorrect={false}
              value={input}
              onChangeText={(texto) => setInput(texto)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Valor"
              keyboardType="numeric"
              useNativeDriver
              autoCorrect={false}
              value={valor}
              onChangeText={(valor) => setValor(valor)}
            />

            <TouchableOpacity style={styles.handleAdd} onPress={() => handleAdd()}>
              <Text style={styles.handleAddText}>Cadastrar</Text>
            </TouchableOpacity>

          </View>

        </TouchableOpacity>

      </Modalize>

    </View>
  );
}

