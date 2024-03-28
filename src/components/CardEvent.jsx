import { Text, View, Image, StyleSheet } from "react-native";

export default function CardEvent({ item }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, styles.header]}>{item.name}</Text>
        <Text style={[styles.textStyle, styles.price]}>{item.price}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  container: {
    flexDirection: "row",
    margin: 5,
    borderWidth: 2,
    borderColor: "#F8FFE5",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 5,
    marginRight: 5,
    width: 300,
  },
  textStyle: {
    fontSize: 16,
  },
  price: {
    color: "green",
    marginTop: 5,
  },
  header: {
    fontWeight: "bold",
  },
});
