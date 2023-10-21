import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		height: "100%",
		width: "100%",
		borderRadius: 30,
	},

	circleButton: {
		backgroundColor: "black",
		width: 60,
		height: 60,
		position: "absolute",
		bottom: 40,
		right: 190,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: "white",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},

	addButtons: {
		backgroundColor: "black",
		width: 90,
		height: 60,
		position: "absolute",
		bottom: 40,
		right: 175,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		shadowColor: "rgba(0, 0, 0, 0.8)",
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: .9,
		shadowRadius: 5,
	},

	buttonText: {
		fontSize: 15,
		color: "white",
	},
});
