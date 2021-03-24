/** @format */

import React, { useState, useContext } from "react";
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Alert,
	TextInput,
} from "react-native";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import Header from "../../components/Header/header";
import Context from "../Context";
import styles from "./styles";
function ItemInputJob(value, onChange, index) {
	return (
		<TextInput
			onChangeText={(text) => onChange(text, index)}
			style={[styles.input, styles.inputJob]}
			value={value}></TextInput>
	);
}
ItemInputJob.defaultProps = {
	value: "",
	onChange: () => {},
	index: -1,
};
function AddJob(props) {
	const [title, setTitle] = useState("");
	const [listJob, setListJob] = useState([]);
	const navigation = useNavigation();
	const [context, setContext] = useContext(Context);

	const handleAdd = () => {
		if (!title.trim()) {
			//tiêu đề trống
			return Alert.alert("Title is required.");
		}

		if (listJob.length === 0) {
			//Nội dung trống
			return Alert.alert("Jobs is required");
		}

		var time = new Date();
		const currentTime = `${time.getHours()}:${time.getMinutes()} 
		${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;
		//Get time
		setContext((state) => [
			...state,
			{
				id: context.length + 1,
				name: title,
				time: currentTime,
				content: listJob,
			},
		]);
		navigation.navigate("JobList");
	};

	const handleAddItemJob = () => {
		setListJob((state) => {
			return [...state, ""];
		});
	};

	const handleChangeText = (text, index) => {
		if (index === -1) {
			return setListJob([text]);
		}

		setListJob((state) => {
			const cloneList = [...state];
			cloneList[index] = text;
			return cloneList;
		});
	};

	const renderItemJob = () => {
		if (listJob.length < 2) {
			return (
				<ItemInputJob
					onChange={handleChangeText}
					index={-1}
					value={listJob[0]}></ItemInputJob>
			);
		}

		return (
			<>
				{listJob.map((item, index) => {
					return (
						<ItemInputJob
							onChange={handleChangeText}
							index={index}
							key={index.toString()}
							value={item}></ItemInputJob>
					);
				})}
			</>
		);
	};

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				goBack={() => navigation.navigate("Products")}
				label='New Job'
				rightButton={() =>
					navigation.navigate("JobList")
				}></Header>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					<Text style={styles.header}>Name of job</Text>
					<TextInput
						style={styles.input}
						value={title}
						onChangeText={(text) =>
							setTitle(text)
						}></TextInput>

					<View style={styles.inputGroup}>
						<Text style={styles.header}>Content</Text>
						{renderItemJob()}
						<TouchableOpacity
							style={styles.addButton}
							onPress={handleAddItemJob}>
							<Text>+1 Item</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity
						style={styles.button}
						onPress={handleAdd}>
						<Text style={styles.buttonText}>Finish</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}
export default AddJob;
