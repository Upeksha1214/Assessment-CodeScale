import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../../App'

type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>


export default function Welcome({navigation}:WelcomeProps) {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.container}>
        <Text style={styles.smallText}>Home Screen</Text>
      </View>
      <View>
        
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
  }
})