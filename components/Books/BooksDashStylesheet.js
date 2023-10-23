import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	backgroundContainer: {
		flex: 1,
	},

	backgroundImage: {
		flex: 1,
    },

	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	dataContainer: {
		height: "20%",
		width: "80%",
		backgroundColor: 'rgba(0,0,0,.7)',
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		margin: 10,
		borderWidth: 2,
	},

	imageContainer: {
		width: 100,
		height: 100,
	},

	images: {
		width: 100,
		height: 100,
	},

	textContainer: {
		width: "40%",
	},

	text: {
		fontSize: 35,
		color: "silver",
	},
});
