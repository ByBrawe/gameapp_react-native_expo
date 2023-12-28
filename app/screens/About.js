import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from '../../assets/css/css'

export default function About({ navigation }) {
  return (
    <View style={styles.flexCss}>
      <Text style={styles.textSize}>About</Text>
      <Button
        title="Open Side Menu"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  )
}