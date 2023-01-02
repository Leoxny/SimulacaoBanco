import { StyleSheet } from "react-native";
import { colors } from "../../themes/Theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor3
    },
    title:{
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14,
    },
    list:{
      marginStart: 14,
      marginEnd: 14,
    },
    fab:{
      position: 'absolute',
      width: 60,
      height: 60,
      backgroundColor: '#8000ff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      right: 25,
      bottom: 25,
      elevation: 2,
      zIndex: 9,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 0.2,
      shadowOffset: {
        height: 1,
        width: 3,
      }
    },
    text:{
      fontSize: 17,
      top: -160,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 135
    },
    textInput:{
      fontSize: 17,
      marginLeft: 10,
      top: -140,
      marginRight: 10,
      backgroundColor: '#d3d3d3',
      padding: 9,
      borderRadius: 4,
      marginBottom: 10,
    }, 
    handleAdd:{
      backgroundColor: '#8000ff',
      fontSize: 17,
      marginLeft: 10,
      top: -140,
      marginRight: 10,
      padding: 9,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    handleAddText:{
      color: '#fff',
      fontSize: 15,
    }
  });
  