import { Text, View, StyleSheet } from "react-native";

export default function CommentsScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      {product.comments.map((comment, index) => {
        return (
          <View key={`commetProduct_${index}`} style={styles.textContainer}>
            <Text style={styles.textStyle}>
              Usuário: <Text style={styles.user}> {comment.user}</Text>
            </Text>
            <Text style={styles.textStyle}>-{comment.comment}</Text>
            <Text style={styles.textStyle}>Publicado em: {comment.date}</Text>
            <Text style={[styles.textStyle, styles.rating]}>
              Nota: {comment.rating}
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
  rating: {
    color: "#FFA630",
  },
  user: {
    color: "#2E5077",
  },
});
