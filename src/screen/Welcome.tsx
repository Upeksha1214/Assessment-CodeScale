import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../../App'

type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>


export default function Welcome({navigation}:WelcomeProps) {
  return (
    <ScrollView style={styles.container}>
      <View>
      <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
        >
          <Image source={require('../assert/icon/setting.png')} 
          style={styles.image}/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:"#2A2A2A"
  },
  smallText: {
    color: "#000000"
  },
  button: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#FFD482",
    width: "92%",
    height: 48,
    left: 14,
    borderRadius: 10,
    justifyContent: "center",

  },
  image: {
    width: 50, 
    height: 50,
    left: 350
  },
})