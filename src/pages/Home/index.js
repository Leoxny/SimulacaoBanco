import React, { useContext, useState } from 'react';
import { Modal, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../componnents/Header'
import Balance, { saldo, gastos } from '../../componnents/Balance';
import Movements from '../../componnents/Movements';
import Actions from '../../componnents/Actions';
import { AppContext } from '../../context/AppContext';
import { styles } from './styles';
import { TextInput } from 'react-native-gesture-handler';
import MaskInput, { Masks } from 'react-native-mask-input';
import { normaliseValue } from '../../utils/Functions';


export default function App() {

  const { receitas, list, saveList, modalVisible, setModalVisible, categoria, despesas, tipo } = useContext(AppContext);

  const [input, setInput] = useState('')
  const [valor, setValor] = useState('')
  const [valorUnmask, setValorUnmask] = useState('')
  const [data, setData] = useState('')

  function handleAdd() {

    const id_tempo = new Date().getTime();

    const payload = {
      id: id_tempo,
      category: categoria,
      label: input,
      value: normaliseValue(valorUnmask),
      date: data,
      type: tipo // receita / despesa
    }

    saveList(payload);
    setModalVisible(false);
  }

  function getNomeCategoria(id_cat) {
    try {

      switch (id_cat) {
        case 1:
          return "Entradas";
        case 2:
          return "Compras";
        case 3:
          return "Carteira";
        case 4:
          return "Boletos";
        case 5:
          return "Conta";
          break;
        default:
          return "Não encontrado";
      }


    } catch (err) {
      console.log('ERRO AO SALVAR', err)
    }
  }

  return (
    <View style={styles.container}>
      <Header name="Leonardo Flach" />
      <Balance saldo={receitas} gastos={despesas} />
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
                    placeholder="Digite sua data"
                    keyboardType="numeric"
                    useNativeDriver
                    mask={Masks.DATE_DDMMYYYY}
                    autoCorrect={false}
                    value={data}
                    onChangeText={(data) => setData(data)}
                  />
                  <MaskInput
                    style={styles.textInput}
                    placeholder="Valor"
                    keyboardType="numeric"
                    useNativeDriver
                    mask={Masks.BRL_CURRENCY}
                    autoCorrect={false}
                    value={valor}
                    onChangeText={(masked, unmasked) => {
                      setValor(masked)
                      setValorUnmask(unmasked)
                    }}
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

