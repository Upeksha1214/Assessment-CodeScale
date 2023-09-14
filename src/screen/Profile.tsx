import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';

// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../../App'

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>

export default function Profile({ navigation }: ProfileProps) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View >
        <Text style={styles.myAppText}>My APP</Text>
      </View>

      <View style={styles.nameInpuView}>
        <Text style={styles.emailText}>
          {name
            .split(' ')
            .map((word: any) => word && 'Name')
            .join(' ')}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor={"#C0C0C0"}
          onChangeText={newText => setName(newText)}
          defaultValue={name}
        />

      </View>

      <View style={styles.emailinputView}>
        <Text style={styles.emailText}>
          {email
            .split(' ')
            .map((word: any) => word && 'Email')
            .join(' ')}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={"#C0C0C0"}
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      // onPress={() => navigation.navigate("Welcome")} 
      >
        <Text style={styles.buttonText}
        >Log out</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    lex: 1,
    backgroundColor: "#2A2A2A",
  },
  myAppText: {
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 29.5,
    letterSpacing: 0,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 45,
  },
  nameInpuView: {
    width: "94%",
    backgroundColor: "#3D3D3D",
    height: 68,
    borderRadius: 12,
    justifyContent: "center",
    left: 12,
    marginTop: 60,
  },

  emailinputView: {

    width: "94%",
    backgroundColor: "#3D3D3D",
    height: 68,
    borderRadius: 12,
    justifyContent: "center",
    left: 12,
    marginTop: 12,
  },

  emailText: {
    top: 1,
    fontFamily: "inter",
    fontWeight: "600",
    color: "#C0C0C0",
    fontSize: 12,
    left: 12,

  },

  textInput: {
    borderRadius: 12,
    borderColor: "#3D3D3D",
    borderWidth: 1,
    color: "#FFFFFF",
    backgroundColor: "#3D3D3D",
    justifyContent: "center",
    width: "92%",
    left: 12


  },

  button: {
    flex: 1,
    marginTop: 400,
    backgroundColor: "#FFD482",
    width: "92%",
    height: 48,
    left: 14,
    borderRadius: 10,
    justifyContent: "center",

  },

  buttonText: {
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 29.5,
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000",

  },
})