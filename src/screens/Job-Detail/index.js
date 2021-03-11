/** @format */

import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
} from "react-native";
/* import styles from "./styles"; */
import Header from "../../components/Header/header";
import Jobs from "../../data/Jobs";

/* function Item({ uri }) {
	return (
		<View style={styles.itemContainer}>
			<Image source={{ uri }} style={styles.img}></Image>
		</View>
	);
} */

function JobDetail({ navigation, route }) {
	const { idJob } = route.params;
	const job = Jobs.filter((item) => item.id === idJob)[0];
	console.log(job);
	/* const handleAddProduct = () => {
		setNumber((state) => state + 1);
	};

	const handleSubProduct = () => {
		setNumber((state) => state - 1);
	}; */

	return (
		<View style={styles.container}>
			<Header
				onBack='Back'
				onBack={() => navigation.goBack()}
				title='Job detail'></Header>
			<ScrollView>
				<View style={styles.wrapper}>
					{/* <View
						style={{
							height: 400,
						}}>
						<FlatList
							showsHorizontalScrollIndicator={false}
							pagingEnabled={true}
							horizontal={true}
							data={product.carouselImages}
							keyExtractor={(item, index) =>
								index.toString()
							}
							renderItem={({ item }) => {
								return <Item uri={item}></Item>;
							}}></FlatList>
					</View>
 */}

					<View style={styles.element}>
						<Text style={styles.title}>Job name</Text>
						<Text style={styles.content}>{job.name}</Text>
					</View>
					<View style={styles.element}>
						<Text style={styles.title}>Job content</Text>
						<Text style={styles.content}>
							{job.content}
						</Text>
					</View>
					<View style={styles.element}>
						<Text style={styles.title}>Date</Text>
						<Text style={styles.content}>{job.date}</Text>
					</View>
					<View style={styles.element}>
						<Text style={styles.title}>Time</Text>
						<Text style={styles.content}>{job.time}</Text>
					</View>
					<View style={styles.element}>
						<Text style={styles.title}>Last</Text>
						<Text style={styles.content}>{job.last}</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapper: {
		flex: 1,
	},
	element: {
		marginHorizontal: 16,
		marginVertical: 8,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	content: {
		fontSize: 15,
	},
});
export default JobDetail;
