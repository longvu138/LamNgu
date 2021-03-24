/** @format */

import React, {
	useContext,
	useState,
	useEffect,
} from "react";

import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import Header from "../../components/Header/header";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import Context from "../Context";

function JobDetail({ navigation, route }) {
	const { idJob } = route.params;
	const [job, setJob] = useState({});
	const [context, setConText] = useContext(Context);

	useEffect(() => {
		const job = context.find(
			(item) => item.id === idJob.id
		);
		setJob(job);
	}, []);

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				goBack={() => navigation.navigate("JobList")}
				label={job.name}></Header>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					<Text
						style={{
							fontSize: 25,
							marginBottom: 20,
						}}>
						{job.name}
					</Text>
					{job &&
						job.content &&
						job.content.map((item, index) => {
							return (
								<View
									key={index.toString()}
									style={{
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 10,
									}}>
									<View
										style={{
											height: 10,
											width: 10,
											backgroundColor: "#000",
											borderRadius: 5,
											marginRight: 5,
										}}></View>
									<Text>{item}</Text>
								</View>
							);
						})}
					<Text
						style={{
							fontSize: 13,
						}}>
						Time create: {job.time}
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}

export default JobDetail;
