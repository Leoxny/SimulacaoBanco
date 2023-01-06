import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
}from 'react-native'

import {Feather, AntDesign, Entypo  } from '@expo/vector-icons'
import { colors } from "../../themes/Theme";
import { AppContext } from '../../context/AppContext';
import React, {useContext} from 'react';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}){

    const { visible, setVisible } = useContext(AppContext);

    return(

        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#fff"/>
                </TouchableOpacity>
            </View>
            {(!visible ?
            <View style={styles.eyes}>
                <AntDesign name="eye" size={24} color="white" onPress={() => setVisible(!visible)}/>
            </View>
            :
            <View style={styles.eyes}>
                <Entypo name="eye-with-line" size={24} color="white" onPress={() => setVisible(!visible)}/>
            </View>
             )}

        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.headers,
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 18,
        color: colors.color1,
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: colors.backgroundColorRGBA,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 44/2,
    },
    iconUser:{
        backgroundColor: '#8000ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 70/2,
        width: 70,
        height: 70,
        marginBottom: 10,
        marginTop: 15,
    },
    containertela:{
        flex: 1, 
        alignItems:'flex-end', 
        marginTop:'5%'
    },
    tela:{
        width:'60%', 
        minHeight: '50%', 
        maxHeight:'90%', 
        backgroundColor:"#FFF",
        marginRight: 3,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset:{width:0,height:1},
        shadowOpacity:1,
        shadowRadius:2,
        elevation:5,
    },
    textTitle:{
        fontWeight:'bold', 
        fontSize: 17, 
    },
    tela2:{
        marginHorizontal: 15,
        marginVertical: 5,
        alignItems: 'center',
    },
    tela3:{
        marginHorizontal: 15,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content2:{
       alignItems: 'center',
       flexDirection: 'row',
    },
    textTitle1:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom:0, 
        fontWeight:'bold', 
        fontSize: 17, 
        marginTop:15,
        marginBottom:5,
    },
    eyes:{
        marginTop: 8,
        margin: 8
    }
})