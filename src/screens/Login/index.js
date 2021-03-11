/** @format */

import React, { useState } from "react";
import styles from "./styles.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import User from "../../data/Account";
import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Image,
	Alert,
	Keyboard,
} from "react-native";

function Login({ navigation }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		if (username.trim() === "") {
			return Alert.alert("Enter your Username.");
		}
		if (password.trim() === "") {
			return Alert.alert("Enter your Password.");
		}
		if (username !== User.username || password !== User.password) {
			return Alert.alert("Username or Password incorrect !");
		}
		navigation.navigate("JobList");
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Image
					source={require("../../images/logo.png")}
					style={styles.logo}></Image>
				<View>
					<FontAwesome5
						name='user-alt'
						size={20}
						color='black'
						style={styles.icon}
					/>
					<TextInput
						style={styles.textinput}
						placeholder='Username'
						onChangeText={(text) => setUsername(text)}></TextInput>
				</View>
				<View>
					<FontAwesome5
						name='lock'
						size={20}
						color='black'
						style={styles.icon}
					/>
					<TextInput
						style={styles.textinput}
						secureTextEntry={true}
						placeholder='Password'
						onChangeText={(text) => setPassword(text)}></TextInput>
				</View>
				<TouchableOpacity style={styles.button} onPress={handleLogin}>
					<Text style={styles.txtLogin}>Log in</Text>
				</TouchableOpacity>
				<View style={styles.view}>
					<Text style={styles.TextSignUp}>Haven't account ?</Text>
					<Text
						style={styles.TextSignUp}
						onPress={() => navigation.navigate("Register")}>
						Sign up
					</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default Login;
