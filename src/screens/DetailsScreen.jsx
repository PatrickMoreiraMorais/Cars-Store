import { StyleSheet, Text, View, Image } from "react-native";

export default function DetailsScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.flexContainer}>
      <View>
        <Text style={[styles.header, styles.textStyle]}>{product.name}</Text>
        <Text style={styles.textStyle}>{product.description}</Text>
      </View>
      <View style={styles.containerImage}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  containerImage: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  flexContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#F8FFE5",
    flex: 1,
  },
  textStyle: {
    fontSize: 18,
  },
  header: {
    fontWeight: "bold",
  },
  price: {
    color: "green",
  },
});
