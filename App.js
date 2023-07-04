import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";

export default function App() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Product" component={Product} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
