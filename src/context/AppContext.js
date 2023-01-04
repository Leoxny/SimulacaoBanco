import React, { createContext, useEffect, useState } from 'react';
// import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";
//import 'moment-timezone';

export const AppContext = createContext({});

function AppProvider({ children }) {

    const [list, setList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [categoria, setCategoria] = useState(0);
    const [tipo, setTipo] = useState(0, 1);
    const [receitas, setReceitas] = useState(0);
    

    //esse useEffect executa na primeira vez que o AppContext é criado, somente uma vez
    useEffect(() => {
        getList();
    }, [])

    /*
    -> array vazio = o useEffect será invocado sempre que o componente for renderizado
    -> [] = array vazio = o useEffect será invocado somente na primeira renderização do componente
    */

    async function getList() {
        try {
            const dbList = await AsyncStorage.getItem("carteira");
            /*
                 JSON.parse() => converte uma STRING para uma objeto do tipo JSON (object, array, string ...)
            */
            const dbListOrder = JSON.parse(dbList).sort((a, b) => 
                (moment(a.date, 'DD/MM/YYYY').format('YYYY-MM-DD') < moment(b.date, 'DD/MM/YYYY').format('YYYY-MM-DD') ? 1 : 
                (moment(b.date, 'DD/MM/YYYY').format('YYYY-MM-DD') < moment(a.date, 'DD/MM/YYYY').format('YYYY-MM-DD') ? -1 : 0)));
            //dbList = dbList.sort((a, b) => (moment(a.date,'DD/MM/YYYY').format('YYYY-MM-DD') - moment(b.date,'DD/MM/YYYY').format('YYYY-MM-DD')));
            
            console.log('LISTA DO BANCO', dbListOrder)
            setList(dbListOrder);

        } catch (err) {
            console.log('ERRO=>', err)
        }
    }

    function saveList(item) {
        console.log('ITEM A SER SALVO', item)
        save(item)
    }

    async function save(item) {
        try {
            //salva um novo item na lista
            const newList = list != null ? [...list, item] : [item];

            console.log('LISTA ATUALIZADA', newList)

            let receitasMap = 0;
            //newList.map

            setReceitas(receitasMap);

            /*
            JSON.stringify => Converte um objeto do tipo JSON para STRING
            */

            await AsyncStorage.setItem("carteira", JSON.stringify(newList));
            setList(newList);

        } catch (err) {
            console.log('ERRO AO SALVAR', err)
        }
    }

    return (
        <AppContext.Provider value={{
            list, saveList,
            modalVisible, setModalVisible,
            categoria, setCategoria,
            tipo, setTipo,
            receitas
        }}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider;