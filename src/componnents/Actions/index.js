import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign} from '@expo/vector-icons'
import { styles } from './styles';
import { AppContext } from '../../context/AppContext'; 

export default function Actions() {

    const { list, saveList } = useContext(AppContext);

    console.log('LISTA DO CONTEXT=>', list)


 return (

   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

    <TouchableOpacity 
        onPress={() => {saveList(1)}}
        style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="addfolder" size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
        onPress={() => {saveList(2)}}
        style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="tagso" size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity
        onPress={() => {saveList(3)}}
        style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="creditcard" size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity
        onPress={() => {saveList(list)}}
        style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="barcode" size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
    </TouchableOpacity>

    <TouchableOpacity
        onPress={() => {saveList(list)}}
        style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="setting" size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelButton}>Conta</Text>
    </TouchableOpacity>

   </ScrollView>

  );
}