import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView,  } from 'react-native';
import { AntDesign} from '@expo/vector-icons'
import { styles } from './styles';
import { AppContext } from '../../context/AppContext';


export default function Actions() {

    const { setModalVisible, setCategoria, setTipo } = useContext(AppContext);

 return (

   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

    <TouchableOpacity
        onPress={() => {
            setCategoria(1)
            setTipo(1)
            setModalVisible(true)
        }}
        style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="addfolder" size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
        onPress={() => {
            setCategoria(2)
            setTipo(0)
            setModalVisible(true)
        }}
        style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="tagso" size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity
        onPress={() => {
            setCategoria(3)
            setTipo(1)
            setModalVisible(true)}}
        style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="creditcard" size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity
        onPress={() => {
            setCategoria(4)
            setTipo(0)
            setModalVisible(true)}}
        style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="barcode" size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
    </TouchableOpacity>

    <TouchableOpacity
        onPress={() => {
            setCategoria(5)
            setTipo(1)
            setModalVisible(true)}}
        style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="setting" size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Conta</Text>
    </TouchableOpacity>

   </ScrollView>

  );
}