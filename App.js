import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [r, setR] = useState()
  const [m, setM] = useState()

  function calcular() {
    let rs = r * m
  }
  
  return (
    <View style={styles.container}>
      <Text>App Calcular Percentual</Text>

      <TextInput placeholder='valor da corrida' onChange={ e => setR(e.target.value)} value={r} />
      <TextInput placeholder='valor da corrida' onChange={e => setM(e.target.value)} value={m} />

      <TouchableOpacity onChange={calcular}>
        <Text>Calcular</Text>
      </TouchableOpacity>

    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
