import React, { useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './styles';

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0)
  const [resultadoText, setResultadoText] = useState('');

  const inputPeso = useRef();
  const inputAltura = useRef();
  
  const calculaImc = () => {;
    let imc = parseFloat(peso.replace(',', '.')) / (parseFloat(altura.replace(',', '.')) * parseFloat(altura.replace(',', '.')));
    setResultado(imc.toFixed(0));

    if(imc <= 18.5) {
      setResultadoText('Abaixo do peso');
    } else if (imc > 18.5 && imc <= 24.9) {
      setResultadoText('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setResultadoText('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
      setResultadoText('Obesidade I');
    } else if (imc >= 35 && imc <= 39.9) {
      setResultadoText('Obesidade II');
    } else {
      setResultadoText('Obesidade III');
    }

    inputPeso.current.clear();
    inputAltura.current.clear();
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.containerForm}>
        <Text style={styles.formTitle}>Insira seus dados:</Text>
        <TextInput ref={inputPeso} onChangeText={(e) => {setPeso(e)}} style={styles.inputImc} placeholder="Peso/kg:" keyboardType="numeric" />
        <TextInput ref={inputAltura} onChangeText={(e) => {setAltura(e)}} style={styles.inputImc} placeholder="Altura/m:" keyboardType="numeric" />
        <TouchableOpacity style={styles.btnImc} onPress={() => {calculaImc()}}>
          <Text style={styles.btnImcText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerResult}>
        <Text style={styles.resultText}>
          { resultado === 0 ? '' : `Seu IMC é: ${resultado}` }
        </Text>
        <Text style={styles.resultText}>
          { resultadoText === '' ? 'Seu resultado aparecera aqui!' : resultadoText }
        </Text>
      </View>

      <Footer />
    </View>
  );
}