import { Text, View, StyleSheet } from "react-native";

export default function QuestionsScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      {product.questions.map((question, index) => {
        return (
          <View key={`questionProduct_${index}`} style={styles.textContainer}>
            <Text style={styles.textStyle}>
              Usuário: <Text style={styles.user}> {question.user} </Text>
            </Text>
            <Text style={styles.textStyle}>Publicado em: {question.date}</Text>
            <Text style={styles.textStyle}>Pergunta: {question.question}</Text>
            <Text style={styles.textStyle}>
              Respondido pelo vendedor: {question.answer}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    margin: 2,
  },
  textContainer: {
    backgroundColor: "#fff",
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
  },
  user: {
    color: "#2E5077",
  },
});
