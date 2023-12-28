import React from "react";
import {
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./navigations/AppNavigator";

const Drawer = createDrawerNavigator();

export default function index() {
  return (
    <NavigationContainer independent={true} >
      
      <AppNavigator />
      
    </NavigationContainer>
  );
}
