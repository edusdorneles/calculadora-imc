import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fcfafa',
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
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    resultText: {
        width: '80%',
        fontSize: 18,
        textAlign: 'center',
        color: 'gray',
    },
});

export default styles;