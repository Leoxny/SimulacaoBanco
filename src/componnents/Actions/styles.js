import { StyleSheet } from "react-native";
import { colors } from "../../themes/Theme";

export const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 32,
    },
    areaButton:{
        backgroundColor: colors.background1,
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})