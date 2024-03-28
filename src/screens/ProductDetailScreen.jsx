import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "./DetailsScreen";
import SpecificDetailsScreen from "./SpecificDetailsScreen";
import SellerScreen from "./SellerScreen";
import CommentsScreen from "./CommentsScreen";
import QuestionsScreen from "./QuestionsScreen";

const Tab = createBottomTabNavigator();

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        initialParams={{ product }}
      />
      <Tab.Screen
        name="Specific Details"
        component={SpecificDetailsScreen}
        initialParams={{ product }}
      />
      <Tab.Screen
        name="Seller"
        component={SellerScreen}
        initialParams={{ product }}
      />
      <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        initialParams={{ product }}
      />
      <Tab.Screen
        name="Questions"
        component={QuestionsScreen}
        initialParams={{ product }}
      />
    </Tab.Navigator>
  );
}
