import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./AddLureStylesheet";
import LureForm from "./LureForm/LureForm";
import LureImage from "/Users/banjaminhatch/turing/4mod/capstone/front-end-vtb/components/AddLure/lureiconNobackground.png";

export default function AddLure() {
	const [formData, setFormData] = useState({
		brand: "",
		variety: "",
		color: "",
		weight: "",
	});

	function updateForm(name, value) {
		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

    function sendLureToApi(){
        
    }

	return (
		<ImageBackground
			source={LureImage}
			style={styles.backgroundImage}
			resizeMode="contain"
		>
			<View style={styles.container}>
				<View style={styles.lureForm}>
					<LureForm formData={formData} updateForm={updateForm} />
				</View>
			</View>
		</ImageBackground>
	);
}
