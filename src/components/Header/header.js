/** @format */

import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

function Header({ title, onBack }) {
	/* const checkVisibleBackBtn = () => {
        if(onBack === null) {
            return null;
        }

        return (
            <TouchableOpacity style={styles.backBtn} onPress={onBack}>
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
        )
    } */

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.backBtn}
					onPress={onBack}>
					<Text style={styles.backText}>{onBack}</Text>
				</TouchableOpacity>
				<Text style={styles.title}>{title}</Text>
			</View>
		</SafeAreaView>
	);
}

Header.defaultProps = {
	title: "Header",
	onBack: "Log-out",
};

const styles = StyleSheet.create({
	safeAreaView: {
		backgroundColor: "#fff",
	},
	container: {
		width: "100%",
		height: 60,
		backgroundColor: "#ddd",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
	},
	backBtn: {
		position: "absolute",
		top: 20,
		left: 20,
	},
	backText: {
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default Header;
