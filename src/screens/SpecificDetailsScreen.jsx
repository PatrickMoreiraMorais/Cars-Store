import { StyleSheet, Text, View } from "react-native";

export default function SpecificDetailsScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{product.name}</Text>
      <Text style={[styles.textStyle, styles.price]}>{product.price}</Text>
      <Text style={styles.textStyle}>
        Motor: {product.technicalSpecifications.engine}
      </Text>
      <Text style={styles.textStyle}>
        Potência: {product.technicalSpecifications.power}
      </Text>
      <Text style={styles.textStyle}>
        Torque: {product.technicalSpecifications.torque}
      </Text>
      <Text style={styles.textStyle}>
        Transmissão: {product.technicalSpecifications.transmission}
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
  price: {
    color: "green",
  },
});
