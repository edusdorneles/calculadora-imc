import { View, Text } from "react-native";

/// Styles
import { styles } from "./styles";

// Interface
interface Title {
  title: string;
}

const Title: React.FC<Title> = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;
