import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import InitialScreen from "./src/screens/InitialScreen";
import ProductsScreen from "./src/screens/ProductsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen
          name="About"
          component={InitialScreen}
          options={{
            headerStyle: {
              backgroundColor: "#F24236",
            },
            headerTintColor: "#fff",
          }}
        />
        <Drawer.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            headerStyle: {
              backgroundColor: "#F24236",
            },
            headerTintColor: "#fff",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
