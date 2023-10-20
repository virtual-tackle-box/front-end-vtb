import { StyleSheet, Dimensions } from "react-native-web";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	backgroundImage: {
		flex: 1,
	},

	textContainer: {
		flex: 0.3,
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: "black",
	},

	waitText: {
		color: "white",
		fontSize: 25,
	},

	map: {
		width: "100%",
		height: "100%",
	},
});
