import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		position: "absolute",
		bottom: 0,
		paddingTop: "2%",
		width: "100%",
		height: "9%",
		backgroundColor: "#25292e",
	},
	iconContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		// marginVertical: 10,
		borderRadius: 1,
        backgroundColor: "#25292e",
	},

	actionButton: {
		top: -25,
		width: 60,
		height: 60,
		backgroundColor: 'black',
		justifyContent: "center",
		alignItems: "center",
		borderRadius: '30',
		borderColor: 'white',
		borderWidth: 2,

	}
});



