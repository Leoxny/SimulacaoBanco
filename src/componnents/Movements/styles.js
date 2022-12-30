import { StyleSheet } from "react-native";
import { colors } from "../../themes/Theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.borderBottomColor,
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginTop: 2,
    },
    date:{
        color: colors.color1,
        fontWeight: 'bold',
    },
    label:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    value:{
        fontSize: 16,
        color: colors.color2,
        fontWeight: 'bold'
    },
    expenses:{
        fontSize: 16,
        color: colors.color3,
        fontWeight: 'bold'
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: colors.color1,
        borderRadius: 8,
    }
})