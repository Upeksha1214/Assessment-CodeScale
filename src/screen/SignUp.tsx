import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../../App'

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>

export default function SignUp({ navigation }: SignUpProps) {
  return (
    <ScrollView >
      <View style={styles.container}>
        <Text style={styles.smallText}>Home Screen</Text>
        <Button
          title='Go to details'
          // onPress={() => navigation.navigate("Details", {
          //   productId: "86"
          // })}

          onPress={() => navigation.navigate("SignUp")}



        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  smallText: {
    color: "#000000"
  }
})