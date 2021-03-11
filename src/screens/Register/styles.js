/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
	textinput: {
		width: 300,
		height: 40,
		backgroundColor: "rgba(0,0,0,.1)",
		borderRadius: 10,
		marginBottom: 10,
		paddingHorizontal: 10,
		color: "black",
		fontSize: 18,
	},
	username: {
		marginBottom: 10,
	},
	textlogo: {
		fontSize: 40,
		fontWeight: "bold",
		marginBottom: 50,
		color: "red",
	},
	button: {
		fontWeight: "bold",
		backgroundColor: "black",
		fontSize: 20,
		color: "#fff",
		width: 100,
		height: 50,
		borderRadius: 7,
		marginTop: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	txtLogin: {
		fontSize: 20,
		color: "#fff",
		fontWeight: "bold",
	},
});
export default styles;
