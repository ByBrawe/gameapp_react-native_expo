import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "./DrawerNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>  
      <Stack.Screen name="Main" component={DrawerNavigator} />
    </Stack.Navigator>   
  );
}