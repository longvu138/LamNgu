/** @format */

import React from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
} from "react-native";
import data from "../../data/Jobs";
import Header from "../../components/Header/header";
import { useNavigation } from "@react-navigation/native";
import styles from "../Job-list/styles";

function ItemList({ data }) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("JobDetail", { idJob: data.id })
			}>
			<View style={styles.container}>
				<View style={styles.content}>
					<Text style={styles.id}>
						{" "}
						{data.id}
						{"/"}
					</Text>{" "}
					<Text style={styles.header}>{data.name}</Text>{" "}
					{/* <Text style={styles.contentJob}>{data.content}</Text>{" "} */}
					<Text style={styles.date}>Date: {data.date}</Text>
					<Text
						style={[
							styles.time,
							{ textTransform: "uppercase" },
						]}>
						Time: {data.time}
					</Text>
					<Text style={styles.last}>Last: {data.last}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
function JobList({ navigation }) {
	return (
		<View style={styles.waper}>
			<Header
				title='Job to do'
				onBack={() =>
					navigation.navigate("Login")
				}></Header>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<ItemList data={item}></ItemList>
				)}></FlatList>
		</View>
	);
}
export default JobList;
