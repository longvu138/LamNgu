import React from "react";
import styles from "./styles.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/logo.png")}
        style={styles.logo}
      ></Image>
      <View>
        <FontAwesome5
          name="user-alt"
          size={20}
          color="black"
          style={styles.icon}
        />
        <TextInput style={styles.textinput} placeholder="Username"></TextInput>
      </View>
      <View>
        <FontAwesome5 name="lock" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.textinput}
          secureTextEntry={true}
          placeholder="Password"
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.button}>Login</TouchableOpacity>
      <View style={styles.view}>
        <Text style={styles.TextSignUp}>Haven't account ?</Text>
        <Text
          style={styles.TextSignUp}
          onPress={() => navigation.navigate("Register")}
        >
          Sign up
        </Text>
      </View>
    </View>
  );
}

export default Login;
