import React from "react";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View } from "react-native";
import Home from "../home";
import Categories from "../screens/Categories";
import Favorites from "../screens/Favorites";
import RateApp from "../screens/RateApp";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Setting from "../screens/Setting";
import detailnew from "../detail/detailnew";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 150,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#31304D",
                marginBottom: 10,
                borderBottomColor: "white",
                borderBottomWidth: 2,
              }}
            >
              <Image
                source={"../assets/image/profile.jpg"}
                name="profile"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 60,
                }}
              />
              <Text style={{ color: "white", fontWeight: "bold", margin: 5 }}>
                ByBrawe
              </Text>
            </View>

            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        lazy: true,
        drawerStyle: {
          backgroundColor: "#161A30",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#161A30",
          shadowColor: "transparent",
          elevation: 0,
          borderColor: "white",
          borderBottomWidth: 0.5,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          color: "white",
        },

        headerRight: () => (
          <TouchableOpacity>
            <AntDesign
              name="user"
              size={24}
              style={{ marginRight: 20 }}
              color="white"
            />
          </TouchableOpacity>
        ),

        headerShadowVisible: true,
        headerTitleAlign: "center",
        headerTintColor: "#fff",

        drawerActiveTintColor: "blue",
        drawerLabelStyle: {
          color: "white",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home",
          title: "Play a Game",
          drawerIcon: () => <Entypo name="home" size={24} color="white" />,
        }}
      />

      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          drawerLabel: "Categories",
          title: "Categories",
          drawerIcon: () => (
            <MaterialIcons name="category" size={24} color="white" />
          ),
        }}
      />

      <Drawer.Screen
        name="Your Favorites"
        component={Favorites}
        options={{
          drawerLabel: "Your Favorites",
          title: "Your Favorites",
          drawerIcon: () => (
            <MaterialIcons name="favorite" size={24} color="white" />
          ),
        }}
      />

      <Drawer.Screen
        name="Rate Us"
        component={RateApp}
        options={{
          drawerLabel: "Rate Us",
          title: "Rate Us",
          drawerIcon: () => <Entypo name="star" size={24} color="white" />,
        }}
      />

      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerLabel: "About",
          title: "About",
          drawerIcon: () => (
            <FontAwesome5 name="info-circle" size={24} color="white" />
          ),
        }}
      />

      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerLabel: "Contact",
          title: "Contact",
          drawerIcon: () => <Entypo name="phone" size={24} color="white" />,
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={Setting}
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: () => (
            <MaterialIcons name="settings" size={24} color="white" />
          ),
        }}
      />

      <Drawer.Screen name="Detail" component={detailnew} options={{
        drawerLabel: "Detail",
        title: "Detail",
        drawerIcon: () => (
          <MaterialIcons name="settings" size={24} color="white" />
        ),
      }} />

      {/* Other Drawer.Screen components can be added similarly */}
    </Drawer.Navigator>
  );
}
