import React, {useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AppContext } from '../../context/AppContext';
import { formatMoney } from '../../utils/Functions';


export default function Movements({data}) {

    const { visible } = useContext(AppContext);

    
 return (

   <TouchableOpacity style={styles.container}>
        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>

            {(!visible ?
                <Text style={data.type === 1 ? styles.value : styles.expenses}> 
                    {data.type === 1 ? `R$ ${formatMoney(data.value)}` : `-R$ ${formatMoney(data.value)}`}
                </Text>
                :
                <View style={styles.skeleton} />
            )}

        </View>
   </TouchableOpacity>
  );
}

