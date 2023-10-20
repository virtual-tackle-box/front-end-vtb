import { View, Text, TextInput, Button, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./SignUpStylesheet";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [number, setNumber] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const navigation = useNavigation();

	function validatePhoneNumber() {
		const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
		return re.test(number);
	}

	function validateEmail() {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	function validateForm() {
		if (!validateEmail()) {
			setErrorMsg("Please enter a valid email address");
			return false;
		} else if (password.length < 1) {
			setErrorMsg("Please enter a password");
			return false;
		} else if (password !== passwordConfirm) {
			setErrorMsg("Passwords do not match");
			return false;
		} else if (number.length > 0 && !validatePhoneNumber()) {
			setErrorMsg("Please enter a valid phone number");
			return false;
		} else {
			return true;
		}
	}

	function postNewUser() {}

	async function handleSignUp() {
		// This will post a new user.
		if (!validateForm()) {
			return;
		}
		try {
			const newUser = {
				email: email,
				password: password,
				number: number,
			};

			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newUser),
			};
			const response = await postNewUser("url", options);

			if (!response.ok) {
				throw new Error("There was an issue signing up.");
			}
			const data = await response.json();

			navigation.navigate("Login");
		} catch (error) {
			setErrorMsg(error.message);
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					source={require("../../assets/tackleboxlogo.png")}
					style={styles.logoImage}
					resizeMode="contain"
				/>
			</View>
			<View>
				<Text>Register new account</Text>
			</View>
			<View style={styles.loginContainer}>
				<TextInput
					testID="email-input"
					maxLength={30}
					style={styles.input}
					placeholder="Email"
					value={email}
					onChangeText={setEmail}
				/>
				<TextInput
					testID="number-input"
					maxLength={10}
					style={styles.input}
					placeholder="Phone Number (optional)"
					value={number}
					onChangeText={setNumber}
				/>
				<TextInput
					testID="password-input"
					maxLength={16}
					style={styles.input}
					placeholder="Password (Max 16 chars)"
					value={password}
					onChangeText={setPassword}
					secureTextEntry={true}
				/>
				<TextInput
					testID="confirm-password-input"
					maxLength={16}
					style={styles.input}
					placeholder="Confirm Password"
					value={passwordConfirm}
					onChangeText={setPasswordConfirm}
					secureTextEntry={true}
				/>
				<View style={styles.buttonContainer}>
					<Button
						testID="signup-button"
						color="white"
						title="SignUp"
						onPress={() => handleSignUp()}
					/>
				</View>
				{errorMsg && <Text>{errorMsg}</Text>}
			</View>
		</View>
	);
}
