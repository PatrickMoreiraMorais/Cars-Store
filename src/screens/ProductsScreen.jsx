import { useEffect, useState } from "react";
import ListEvent from "../components/ListEvent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ProductDetailScreen from "./ProductDetailScreen";
const url = "https://at2-dr3-api-default-rtdb.firebaseio.com/";
const resource = "products";
const Stack = createNativeStackNavigator();

export default function ProductsScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  function convert(data) {
    setLoading(true);
    const ids = Object.keys(data);
    const products = Object.values(data);
    const productsList = products.map((product, index) => {
      return {
        id: ids[index],
        ...product,
      };
    });
    return productsList;
  }

  async function productsRequest() {
    try {
      const response = await fetch(`${url}/${resource}.json`);
      const data = await response.json();
      const convertedList = convert(data);
      setProducts(convertedList);
    } catch {
      setMsg("A requisição não ocorreu como esperado");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    productsRequest();
  }, []);

  const filteredProductsList = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });
  function selectEvent(selectedProduct) {
    navigation.navigate("ProductDetail", { product: selectedProduct });
  }
  if (loading != true) {
    if (products.length > 0) {
      return (
        <Stack.Navigator>
          <Stack.Screen name="ProductList">
            {() => (
              <View style={styles.container}>
                <Text style={styles.header}>Buscar Carro</Text>
                <TextInput
                  value={search}
                  onChangeText={setSearch}
                  style={styles.input}
                />
                <ListEvent
                  products={filteredProductsList}
                  action={selectEvent}
                />
              </View>
            )}
          </Stack.Screen>
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
      );
    } else {
      return <Text>{msg}</Text>;
    }
  }
  if (loading === true) {
    return <ActivityIndicator />;
  }
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#2E86AB",
  },
  header: {
    fontSize: 16,
  },
  container: {
    marginBottom: 50,
  },
});
