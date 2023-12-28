import {
 
  useNavigation,
} from "@react-navigation/native";
import { styles } from "../../assets/css/css";

import {
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  } from "react-native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { data } from "../1600oyun";
import { openBrowserAsync } from "expo-web-browser";


export default function detailnew({route}) {
  
  console.log(route);
  
  const dataFiltered = data.filter((item) => item.slug === route.params.slug);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.flexCss}>
      <StatusBar
        backgroundColor="#161A30"
        style="light"
        barStyle="light-content"
      />
      

      {/* <Stack.Screen
        options={{
          headerTitle: "Play Game",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#161A30",
            shadowColor: "transparent",
            elevation: 0,
            borderColor: "white",
            borderBottomWidth: 0.5,
          },
          headerShadowVisible: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <AntDesign name="user" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      /> */}

      <Image
        source={{ uri: dataFiltered[0].Asset[0] }}
        style={{ width: 250, height: 250, borderRadius: 10 }}
      />

      <Text alt="Game" style={{ color: "white", margin: 20, fontSize: 30 }}>
        {dataFiltered[0].Title}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "orange",
          padding: 10,
          borderRadius: 10,
          width: 100,
          alignItems: "center",
        }}
        onPress={() =>
          openBrowserAsync(
            `https://htmlgamewebsite.vercel.app/details/${route.params.slug}`
          )
        } 
      >
        <Text style={{ color: "white", fontSize: 20 }}>Play</Text>
      </TouchableOpacity>

         <TouchableOpacity
        style={{
          backgroundColor: "gray",
          padding: 10,
          borderRadius: 10,
          width: 100,
          margin: 10,
          alignItems: "center",
        }}
        onPress={() =>
          navigation.goBack()
        } 
      >
        <Text style={{ color: "white", fontSize: 20 }}>Back</Text>
      </TouchableOpacity>

      
    </SafeAreaView>
  );
}

