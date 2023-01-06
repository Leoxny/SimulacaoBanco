import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";

export const AppContext = createContext({});

function AppProvider({ children }) {

    const [list, setList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [categoria, setCategoria] = useState(0);
    const [tipo, setTipo] = useState(0, 1);
    const [receitas, setReceitas] = useState(0);
    const [despesas, setDespesas] = useState(0);

    const [visible, setVisible] = useState(false);


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

            //await AsyncStorage.removeItem("carteira");
            const dbList = await AsyncStorage.getItem("carteira");

            /*
                 JSON.parse() => converte uma STRING para uma objeto do tipo JSON (object, array, string ...)
            */

            if (dbList != null) {
                const dbListOrder = JSON.parse(dbList).sort((a, b) =>
                (moment(a.date, 'DD/MM/YYYY').format('YYYY-MM-DD') < moment(b.date, 'DD/MM/YYYY').format('YYYY-MM-DD') ? 1 :
                    (moment(b.date, 'DD/MM/YYYY').format('YYYY-MM-DD') < moment(a.date, 'DD/MM/YYYY').format('YYYY-MM-DD') ? -1 : 0)));
                //dbList = dbList.sort((a, b) => (moment(a.date,'DD/MM/YYYY').format('YYYY-MM-DD') - moment(b.date,'DD/MM/YYYY').format('YYYY-MM-DD')));

                //console.log('LISTA DO BANCO', dbListOrder)
                setList(dbListOrder);
                updateValues(dbListOrder);
            }

        } catch (err) {
            console.log('ERRO=>', err)
        }
    }

    function saveList(item) {
        //console.log('ITEM A SER SALVO', item)
        save(item)
    }

   async function updateValues(list){

    try{

        let des = 0
        let rec = 0;

        list.map(item => {
          if (item.type == 1) {
            rec += parseFloat(item.value)
          }else if (item.type == 0) {
            des -= parseFloat(item.value)
          }
        })

        setReceitas(rec);
        setDespesas(des);

        console.log('FORMATO DA GRANA =>', rec, des)


    }catch(err){
        console.log('ERRO AO SALVAR', err)
    }

    }

    async function save(item) {
        try {
            //salva um novo item na lista
            const newList = list != null ? [...list, item] : [item];
            
            updateValues(newList)

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
            receitas,
            despesas,
            visible, setVisible
        }}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider;