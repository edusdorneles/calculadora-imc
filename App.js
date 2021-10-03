import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const inputPeso = useRef();
  const inputAltura = useRef();
  
  const calculaImc = () => {
    inputPeso.current.clear();
    inputAltura.current.clear();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#65427C" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Calculadora de IMC</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.formTitle}>Insira seus dados:</Text>
        <TextInput ref={inputPeso} onChange={(e) => {setPeso(e.target.value)}} style={styles.inputImc} placeholder="Peso/kg:" keyboardType="numeric" />
        <TextInput ref={inputAltura} onChange={(e) => {setAltura(e.target.value)}} style={styles.inputImc} placeholder="Altura/cm:" keyboardType="numeric" />
        <TouchableOpacity style={styles.btnImc} onPress={() => {calculaImc()}}>
          <Text style={styles.btnImcText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerResult}>
        <Text style={styles.resultText}>Seu resultado aparecera aqui!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container geral e cabeçalho
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fcfafa',
  },

  header: {
    width: '100%',
    height: 45,
    backgroundColor: '#65427C',
    marginBottom: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 45,
  },


  // Formulário
  containerForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },  

  formTitle: {
    textAlign: 'center',
    fontSize: 15,
  },

  inputImc: {
    width: '65%',
    backgroundColor: 'white',
    marginBottom: 6,
    height: 40,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#B497C8',
  },

  btnImc: {
    width: '65%',
    height: 30,
    backgroundColor: '#B497C8',
    borderRadius: 10,
  },

  btnImcText: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
  },


  // Resultado
  containerResult: {
    height: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultText: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'gray',
  }
});