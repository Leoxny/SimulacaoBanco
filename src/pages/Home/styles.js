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
    text:{
      fontSize: 17,
      top: -160,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 120
    },
    textInput:{
      fontSize: 17,
      marginLeft: 10,
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
      marginRight: 10,
      padding: 9,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    handleAddText:{
      color: '#fff',
      fontSize: 15,
    },
    centeredView:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "red",
      fontWeight: "bold",
      textAlign: "center",
      marginLeft: 260,
      marginTop: -80
    },
  });
  