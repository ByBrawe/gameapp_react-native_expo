import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { data } from "./1600oyun";

import {  useNavigation } from '@react-navigation/native';


 const Home = () => {
  const navigation = useNavigation();
  return (
    
    <SafeAreaView >

      <StatusBar backgroundColor="#161A30" style="light" barStyle="light-content" />
    
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
          },
          headerShadowVisible: true,
          headerLeft: () => (
            <TouchableOpacity>
              <Entypo name="menu" size={30} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <AntDesign name="user" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      /> */}


      <ScrollView>
      <View style={styles.container}>
         
          <ScrollView
            contentContainerStyle={styles.cardsContainer}
          >
            {data.map((game, key) => (
              <TouchableOpacity key={key} onPress={()=>{navigation.navigate("Detail",{
                slug : game.slug
              })}}> 
              {/* <TouchableOpacity key={key} onPress={()=>{router.push(`/detail/${game.slug}`)}}> */}

              <View style={styles.card} >
                <Image
                  source={{
                    uri: game.Asset[0],
                  }}
                  style={styles.image}
                  alt="Game"
                />
                <Text style={styles.textCard}>{game.Title}</Text>
              </View>
              </TouchableOpacity>
            ))}
                  
           
          </ScrollView>


   {/* <FlatList
            // contentContainerStyle={styles.cardsContainer}
            

            data={data}
            renderItem={({item: game, index: key})=>(
              <TouchableOpacity key={key} onPress={()=>{router.push(`/detail/${game.slug}`)}}>
               <TouchableOpacity key={key} onPress={()=>{navigation.navigate("Detail",{
                slug : game.slug
              })}}> 

              <View style={styles.card} >
                <Image
                  source={{
                    uri: game.Asset[0],
                  }}
                  style={styles.image}
                  alt="Game"
                />
                <Text style={styles.textCard}>{game.Title}</Text>
              </View>
              </TouchableOpacity>

            )} /> */}



          <TouchableOpacity style={styles.button}>
               <Text style={styles.text}>Next</Text>     
          </TouchableOpacity>
          
        </View>   
        
                           
        </ScrollView>     
      
    </SafeAreaView>
    
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#161A30",
  },
  cardsContainer: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: "auto",
    justifyContent: "center",
  },
  card: {
    width: 125,
    height: 100,
    margin: 15,
    marginBottom: 35
  },
  image: {
    width: 125,
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textCard: {
    color: "white",
    textAlign: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding : 5,
    backgroundColor: "#1F2545",
    fontSize: 12,
  },
  button: {
    
    backgroundColor: "#FF6C22",
    
    width: 90,
    alignItems: "center",
    height: 40,
    padding: 0,
    borderRadius: 10,
    margin : 20,
   
  },

  text: {
    color: "white",
    fontSize: 25,
  },

});


export default Home;