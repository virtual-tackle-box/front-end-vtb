import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: "100%",
		resizeMode: "cover",
	},

	container: {
		width: "100%",
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
	},

	formHeader: {
		fontSize: 24,
		marginBottom: 20,
	},

	lureForm: {
		backgroundColor: "rgba(0,0,0,.7)",
		alignContent: "center",
		justifyContent: "center",
		borderRadius: 10,
		padding: 50,
		marginTop: 150,
	},

	cancelButton: {
		top: 100,
	},

	errorContainer:{
		height: 50,
		backgroundColor: 'yellow'
	}
});
