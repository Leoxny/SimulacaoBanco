import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext({});

function AppProvider({ children }) {

    const [list, setList] = useState([]);

    const listaPreenchida = [
        {
            id: 1,
            category: 1,
            label: 'Boleto conta luz',
            value: '300,90',
            date: '17/09/2022',
            type: 0 // despesas
        },

        {
            id: 2,
            category: 2,
            label: 'Pix cliente X',
            value: '2.500,00',
            date: '22/09/2022',
            type: 1 // receita /entradas
        },

        {
            id: 3,
            category: 3,
            label: 'Salário',
            value: '7.200,00',
            date: '28/09/2022',
            type: 1 // receita /entradas
        },
        {
            id: 4,
            category: 4,
            label: 'Pagamento ao banco',
            value: '4.500,00',
            date: '11/05/2022',
            type: 0 // receita /entradas
        },

    ]


    useEffect(() => {
        setList(listaPreenchida);
    }, [])

    function saveList(category) {

        console.log('CATEGORIA=>', category);
        const newList = listaPreenchida.filter(l => l.category == category);

        console.log('NOVA LISTA=>', newList.length);
        setList(newList)
    }

    return (
        <AppContext.Provider value={{
            list, saveList
        }}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider;