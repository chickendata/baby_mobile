import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./register";
import LogIn from "./logIn";
import StartBaby from "./startBaby";
import HelpComp from "./help";
import Header from "@/components/Header";
import BabyGenerator from "./babyGenerator";
import StartApp from "./startApp";
import TryGenerator from "./trygenerator";
import AppPurchase from "./appPurchase";
import Paypal from "./paypal";

const Stack = createNativeStackNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="startApp"
          component={StartApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="trygenerator"
          component={TryGenerator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="appPurchase"
          component={AppPurchase}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="paypal"
          component={Paypal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="logIn"
          component={LogIn}
          options={{ headerShown: false, header: () => <Header /> }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="startBaby"
          component={StartBaby}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="help"
          component={HelpComp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="babyGenerator"
          component={BabyGenerator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
