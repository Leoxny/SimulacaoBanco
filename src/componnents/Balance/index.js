import { View, Text } from 'react-native';
import { styles } from './styles';
import { AppContext } from '../../context/AppContext';
import React, {useContext} from 'react';


export default function Balance({receitas, despesas}) {


    const { visible } = useContext(AppContext);

 return (

   <View style={styles.container}>

     {(!visible ?
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Receitas</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>{receitas}</Text>
            </View>
        </View>
        :
        <View style={styles.skeleton} />
    )}

    {(!visible ?
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Despesas</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.expenses}>{despesas}</Text>
            </View>
        </View>
        :
        <View style={styles.skeleton} />
    )}

    </View>

  );
}

