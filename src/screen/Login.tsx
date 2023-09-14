import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react';


// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../../App'

type LoginProps = NativeStackScreenProps<RootStackParamList>


export default function Login({ navigation }: LoginProps) {

    const [text, setText] = useState('');

    return (
        <ScrollView style={styles.container}>
            <View >
                <Text style={styles.myAppText}>My APP</Text>
            </View>

            <View style={styles.emailinputView}>
                <Text style={styles.emailText}>
                    {text
                        .split(' ')
                        .map((word: any) => word && 'Email')
                        .join(' ')}
                </Text>
                <TextInput
                    style={styles.textInput}
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
            <Text style={{ left: 258 }}>Forgot Password ? </Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Welcome")}
                style={styles.button}
            // onPress={() => navigation.navigate("Welcome")} 
            >
                <Text style={styles.buttonText}
                >Sign In</Text>
            </TouchableOpacity>
            
            <View>
            <TouchableOpacity 
            onPress={() => navigation.navigate("SignUp")}
            ><Text style={styles.SignUpLink}>Sign Up</Text></TouchableOpacity>
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
        marginTop: 124,
    },
    emailinputView: {
        width: "94%",
        backgroundColor: "#3D3D3D",
        height: 68,
        borderRadius: 12,
        justifyContent: "center",
        left: 12,
        marginTop: 114,
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
        marginTop: 80,
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

    singUpTxt:{
        marginTop:120,
        color:"#FFFFFF",
        left:70,
        
        width:165
        
    },

    SignUpLink:{
        color:"#FFD482",
        textDecorationLine: "underline",
        left:235,
        top:140

    }

})




