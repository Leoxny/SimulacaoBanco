import React, { createContext, useEffect, useState } from 'react';
// import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext({});

function AppProvider({ children }) {

    const [list, setList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [categoria, setCategoria] = useState(0);
    const [tipo, setTipo] = useState(0, 1);

    //esse useEffect executa na primeira vez que o AppContext é criado, somente uma vez
    useEffect(() => {
        getList();
    }, [])

    /*
    -> array vazio = o useEffect será invocado sempre que o componente for renderizado
    -> [] = array vazio = o useEffect será invocado somente na primeira renderização do componente
    */

    async function getList() {
        const dbList = await AsyncStorage.getItem("carteira");

        const dbListJson = JSON.parse(dbList);
        console.log('LISTA DO BANCO', dbListJson)
        setList(dbListJson);
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
            tipo, setTipo
        }}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider;