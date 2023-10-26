import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { styles } from "./AddLureStylesheet";
import LureForm from "./LureForm/LureForm";
import LureImage from "./lureiconNobackground.png";
import { postNewLure } from "../../fetchCalls";
import { useUserContext } from "../UserContext/UserContext";
import { useToast } from "react-native-toast-notifications";
import PropTypes from 'prop-types';

export default function AddLure() {
	const [errorMsg, setErrorMsg] = useState("");
	const navigation = useNavigation();
	const [formData, setFormData] = useState({
		brand: "",
		variety: "",
		color: "",
		weight: "",
	});
	const {setShowMarker, userID} = useUserContext();
	const toast = useToast();

	function updateForm(name, value) {
		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	function navigateToDash() {
		navigation.navigate("Dashboard");
	}

	async function sendLureToApi() {
		if (
			!formData.brand ||
			!formData.variety ||
			!formData.color ||
			!formData.weight
		) {
			setErrorMsg("Please fill out all fields.");
			return;
		}
		

		try {
			setShowMarker(false);
			const response = await postNewLure(userID, formData);
			toast.show("Lure added!", { type: 'success', duration: 2000})
			setErrorMsg("");
			navigation.navigate("book");
		} catch (error) {
			setErrorMsg(error.message);
		}
	}

	return (
		<ImageBackground
			source={LureImage}
			style={styles.backgroundImage}
			resizeMode="contain"
		>
			<View style={styles.container}>
				<TouchableOpacity onPress={navigateToDash} style={styles.cancelButton}>
					<Text>Cancel</Text>
				</TouchableOpacity>
				<View style={styles.lureForm}>
					<LureForm
						formData={formData}
						updateForm={updateForm}
						sendLureToApi={sendLureToApi}
					/>
				</View>
				{errorMsg && (
					<View style={styles.errorContainer}>
						<Text style={styles.errorText}>{errorMsg}</Text>
					</View>
				)}
			</View>
		</ImageBackground>
	);
}

useUserContext.propTypes = {
  setShowMarker: PropTypes.func.isRequired
}