import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Pagina home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
