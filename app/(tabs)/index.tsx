import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import suggested from "../suggested";
import liked from "../liked";
import library from "../library";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="LIBRARY" component={library} />
      <Tab.Screen name="LIKED" component={liked} />
      <Tab.Screen name="SUGGESTED" component={suggested} />
    </Tab.Navigator>
  );
}
