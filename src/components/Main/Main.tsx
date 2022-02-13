import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

// Styles
import { styles } from "./styles";

const Main = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [textResult, setTextResult] = useState("");
  const [message, setMessage] = useState(
    "Insira seus dados para calcular o IMC"
  );

  const calculateIMC = () => {
    if (height && weight) {
      const weightParsed = parseFloat(weight);
      const heightParsed = parseFloat(height);

      const imc = (weightParsed / (heightParsed * heightParsed)).toFixed(2);
      const imcParsed = parseFloat(imc);

      if (imcParsed < 18.5) {
        setTextResult("Peso baixo");
      } else if (imcParsed >= 18.5 && imcParsed <= 24.9) {
        setTextResult("Peso normal");
      } else if (imcParsed >= 25 && imcParsed <= 34.9) {
        setTextResult("Sobrepeso");
      } else if (imcParsed >= 30 && imcParsed <= 34.9) {
        setTextResult("Obesidade I");
      } else if (imcParsed >= 35 && imcParsed <= 39.9) {
        setTextResult("Obesidade II");
      } else {
        setTextResult("Obesidade III");
      }

      setResult(imc.replace(".", ","));
      setMessage("Seu IMC é:");
    } else {
      setMessage("Preencha todos os campos.");
      setResult("");
      setTextResult("");
    }

    // Reset
    setHeight("");
    setWeight("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.inputTitle}>Altura:</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua altura. Ex: 1.80"
          keyboardType="numeric"
          maxLength={4}
          defaultValue={height}
          onChangeText={(e: any) => setHeight(e)}
        />

        <Text style={styles.inputTitle}>Peso:</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu peso. Ex: 71.50"
          keyboardType="numeric"
          maxLength={5}
          defaultValue={weight}
          onChangeText={(e: any) => setWeight(e)}
        />

        <TouchableOpacity
          style={styles.calculateBtn}
          onPress={() => {
            calculateIMC();
          }}
        >
          <Text style={styles.calculateBtnText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{message}</Text>
        <Text style={styles.imcResult}>{result}</Text>
        <Text style={styles.resultText}>{textResult}</Text>
      </View>
    </View>
  );
};

export default Main;
