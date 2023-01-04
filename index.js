import React, { useContext, useState } from 'react';
import { Modal, Text, View, FlatList, TouchableOpacity, Pressable } from 'react-native';
import Header from '../../componnents/Header'
import Balance from '../../componnents/Balance';
import Movements from '../../componnents/Movements';
import Actions from '../../componnents/Actions';
import { AppContext } from '../../context/AppContext';
import { styles } from './styles';
import { TextInput } from 'react-native-gesture-handler';
import MaskInput, {Masks} from 'react-native-mask-input';

export default function App() {

  const { list, saveList, modalVisible, setModalVisible, categoria, tipo } = useContext(AppContext);

  const [input, setInput] = useState('')
  const [valor, setValor] = useState('')
  const [data, setData] = useState('')


  function handleAdd() {

    const id_tempo = new Date().getTime();

    const itemTeste = {
      id: id_tempo,
      category: categoria,
      label: input,
      value: valor,
      date: data,
      type: tipo // receita /entradas
    }
    saveList(itemTeste);
    setModalVisible(false);
  }

  function getNomeCategoria(id_cat){
    try{

      if(id_cat == 1){
        return "Entradas";
      }else if(id_cat == 2){
      }

      //mudar para SWITCH CASE


    }catch{
      
    }
  }

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

      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        setModalVisible(false);
        }}
      >     
      <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Movimentações</Text>
        <Text style={styles.modalText}>{getNomeCategoria(categoria)}</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
            >
        <Text style={styles.textStyle}>X</Text>
        </Pressable>
        <TouchableOpacity>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Adicionar movimentações"
              useNativeDriver
              multiline={true}
              autoCorrect={false}
              value={input}
              onChangeText={(input) => setInput(input)}
            />
            <MaskInput
              style={styles.textInput}
              placeholder="Digita sua data"
              //useNativeDriver
              mask={Masks.DATE_DDMMYYYY}
              //autoCorrect={false}
              value={data}
              onChangeText={(data) => setData(data)}
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
      </View>
    </View>
  </Modal>
  </View>

  </View>

  );
}

