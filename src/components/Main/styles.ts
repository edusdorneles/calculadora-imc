import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
  },

  inputTitle: {
    fontSize: 20,
    marginBottom: 5,
  },

  input: {
    marginBottom: 20,
    width: "auto",
    backgroundColor: "#EEEEEE",
    borderRadius: 15,
    padding: 10,
    fontSize: 14,
  },

  calculateBtn: {
    backgroundColor: "#65427C",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  calculateBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  messageText: {
    textAlign: "center",
  },

  resultContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 95,
  },

  resultText: {
    fontSize: 18,
  },

  imcResult: {
    color: "#65427C",
    fontSize: 55,
    fontWeight: "bold",
    margin: 4,
  },
});
