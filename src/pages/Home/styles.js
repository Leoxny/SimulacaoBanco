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
    }
  });
  