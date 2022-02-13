import { View, StatusBar } from "react-native";

// Styles
import { styles } from "./styles";

// Components
import Title from "./src/components/Title/Title";
import Main from "./src/components/Main/Main";

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Title title="LIFECARE" />
      <Main />

      <StatusBar
        translucent={true}
        backgroundColor="#65427C"
        barStyle="light-content"
      />
    </View>
  );
};

export default App;
