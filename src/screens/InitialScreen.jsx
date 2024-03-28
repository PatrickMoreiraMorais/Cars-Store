import { StyleSheet, Text, View } from "react-native";

export default function InitialScreen() {
  return (
    <View>
      <Text style={styles.text}>Desenvolvedor: Patrick Moreira</Text>
      <Text style={styles.text}>Contato: (11) 99999-9999</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
