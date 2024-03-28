import { FlatList, TouchableOpacity } from "react-native";
import CardEvent from "./CardEvent";

export default function ListEvent({ products, action }) {
  function renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => action(item)}>
        <CardEvent item={item} />
      </TouchableOpacity>
    );
  }

  return (
    <FlatList data={products} renderItem={renderItem} key={(item) => item.id} />
  );
}
