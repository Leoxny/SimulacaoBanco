import React, { createContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

export const AppContext = createContext({});

function AppProvider({ children }) {

    const [list, setList] = useState([]);

     useEffect(() => {
         getList();
    }, [])

    async function getList() {
        const dbList = await SecureStore.getItemAsync("carteira");
        console.log('LISTA DO BANCO', dbList)
        setList(JSON.parse(dbList));
    }

    function filterList(category) {
        //faz um filtro na lista através da categoria selecionada

        console.log('CATEGORIA=>', category);
        const newList = list.filter(l => l.category == category);

        //console.log('NOVA LISTA=>', newList.length);
        setList(newList)
    }

    function saveList(item) {
        console.log('TESTE', item)
        save(item)
    }

    async function save(item) {
        console.log('ITEM TESTE=>', item);
        //salva um novo item na lista
        const newList = [...list, item];

        await SecureStore.setItemAsync("carteira", JSON.stringify(newList));
        setList(newList);
    }

    return (
        <AppContext.Provider value={{
            list, filterList, saveList
        }}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider;