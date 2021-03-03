import React from "react";
import styles from "./styles";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import Login from "../Login";

function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textlogo}>Register</Text>
      <TextInput style={styles.textinput} placeholder="Username"></TextInput>
      <TextInput
        style={styles.textinput}
        secureTextEntry={true}
        placeholder="Password"
      ></TextInput>
      <TextInput
        style={styles.textinput}
        secureTextEntry={true}
        placeholder="Confirm Password"
      ></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.txtLogin}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;
