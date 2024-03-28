import { Text, View, StyleSheet } from "react-native";

export default function SellerScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Nome: {product.vendedorData.name}</Text>
      <Text style={styles.textStyle}>E-mail: {product.vendedorData.email}</Text>
      <Text style={styles.textStyle}>
        Telefone: {product.vendedorData.phone}{" "}
      </Text>
      <Text style={[styles.textStyle, styles.rating]}>
        Nota: {product.vendedorData.rating}
      </Text>
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
  rating: {
    color: "#FFA630",
  },
});
