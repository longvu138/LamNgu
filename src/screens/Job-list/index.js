/** @format */

import React, { useContext, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Item from "./Item/index";
import Header from "../../components/Header/header";
import { ApplicationStyles } from "../../Themes/ApplicationStyles";
import styles from "./styles";
import Context from "../Context";
import { Jobs } from "../../data/Jobs";
import { useNavigation } from "@react-navigation/core";

function JobList({ navigation }) {
	const [context, setContext] = useContext(Context);

	useEffect(() => {
		setContext([...Jobs]);
	}, []);

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				label='Todo'
				rightComponent={<Text>Add</Text>}
				rightButton={() =>
					navigation.navigate("AddJob")
				}></Header>
			<View style={styles.content}>
				<FlatList
					data={context}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => {
						return <Item data={item}></Item>;
					}}></FlatList>
			</View>
		</View>
	);
}
export default JobList;
