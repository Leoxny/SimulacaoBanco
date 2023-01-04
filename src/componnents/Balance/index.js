import { View, Text } from 'react-native';
import { styles } from './styles';


export default function Balance({saldo, gastos}) {

 return (

   <View style={styles.container}>

        <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>{saldo}</Text>
            </View>
        </View>

        <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.expenses}>{gastos}</Text>
            </View>
        </View>

   </View>

  );
}

