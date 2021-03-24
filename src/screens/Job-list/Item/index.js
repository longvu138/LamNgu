/** @format */

import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Item({ data }) {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("JobDetail", {
					idJob: data,
				})
			}>
			<View style={styles.container}>
				<View style={styles.content}>
					<Text style={styles.header} numberOfLines={2}>
						{data.name}
					</Text>
					<View style={[styles.dot]}></View>
				</View>
				<Text>{data.time}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: "#fff",
		marginVertical: 10,
		marginHorizontal: 10,
		borderRadius: 7,
		overflow: "hidden",
	},
	containerImage: { width: 100, height: 150 },
	image: {
		width: 100,
		height: 150,
		resizeMode: "contain",
	},
	content: {
		flex: 1,
		marginBottom: 10,
	},
	header: {
		fontSize: 20,
	},
	price: {
		fontSize: 15,
		marginBottom: 10,
	},
	dot: {
		height: 10,
		width: 10,
		borderRadius: 5,
		position: "absolute",
		right: 10,
		top: 10,
		backgroundColor: "green",
	},
});

export default Item;
