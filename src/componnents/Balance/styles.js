import { StyleSheet } from "react-native";
import { colors } from "../../themes/Theme";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.backgroundColor1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    item:{

    },
    itemTitle:{
        fontSize: 20,
        color: colors.color1
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol:{
        color: colors.color1,
        marginRight: 6,
    },
    balance:{
        fontSize:23,
        color: colors.color2
    },
    expenses:{
        fontSize: 22,
        color: colors.color3
    }
})