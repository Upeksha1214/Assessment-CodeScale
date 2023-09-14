import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';

// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../../App'
import { TextInput } from 'react-native';

type SignUpProps = NativeStackScreenProps<RootStackParamList>

export default function SignUp({ navigation }: SignUpProps) {

  const [text, setText] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View >
        <Text style={styles.myAppText}>My APP</Text>
      </View>

      <View style={styles.nameInputView}>
        <Text style={styles.emailText}>
          {text
            .split(' ')
            .map((word: any) => word && 'Email')
            .join(' ')}
        </Text>
        <TextInput
          style={styles.emailTextInput}
          placeholder="Name"
          placeholderTextColor={"#C0C0C0"}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />

      </View>

      <View style={styles.emailinputView}>
        <Text style={styles.emailText}>
          {text
            .split(' ')
            .map((word: any) => word && 'Email')
            .join(' ')}
        </Text>
        <TextInput
          style={styles.emailTextInput}
          placeholder="Email"
          placeholderTextColor={"#C0C0C0"}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />

      </View>

      <View style={styles.passwordinputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password."
          placeholderTextColor="#C0C0C0"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.passwordinputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password."
          placeholderTextColor="#C0C0C0"
          secureTextEntry={true}
        />
      </View>

      <View>
        <View>
          <Text style={{ width: 180, left: 15,top:20}}>One lowercase character</Text>
          <Text style={{left:210, }}>One lowercase character</Text>
        </View>

        <Text style={{ width: 180, left: 15, top:20 }}>One uppercase character</Text>
        <Text style={{left:210, }}>One numberr</Text>
        <Text style={{ width: 180, left: 15, top:20}}>8 characters minimum</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        // onPress={() => navigation.navigate("Welcome")} 
        >
          <Text style={styles.buttonText}
          >Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
        ><Text style={styles.SignUpLink}>Sign in</Text></TouchableOpacity>
        <Text style={styles.singUpTxt}>Don’t have an account?</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  nameInputView: {
    width: "94%",
    backgroundColor: "#3D3D3D",
    height: 68,
    borderRadius: 12,
    justifyContent: "center",
    left: 12,
    marginTop: 20

  },

  emailinputView: {
    width: "94%",
    backgroundColor: "#3D3D3D",
    height: 68,
    borderRadius: 12,
    justifyContent: "center",
    left: 12,
    marginTop: 14,
  },

  emailText: {
    top: 1,
    fontFamily: "inter",
    fontWeight: "600",
    color: "#C0C0C0",
    fontSize: 12,
    left: 12,

  },

  emailTextInput: {
    borderRadius: 12,
    borderColor: "#3D3D3D",
    borderWidth: 1,
    color: "#FFFFFF",
    backgroundColor: "#3D3D3D",
    justifyContent: "center",
    width: "92%",
    left: 12

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
  passwordinputView: {
    width: "94%",
    backgroundColor: "#3D3D3D",
    height: 68,
    borderRadius: 12,
    justifyContent: "center",
    left: 12,
    marginTop: 20,
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

  singUpTxt: {
    marginTop: 90,
    color: "#FFFFFF",
    left: 70,

    width: 165

  },

  SignUpLink: {
    color: "#FFD482",
    textDecorationLine: "underline",
    left: 235,
    top: 111

  },
  pswdValidationTxt: {
    width: 165,
  }

})