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

	function handleLogin(name, password) {
		if (!name || !password) {
			return;
		} else {
			navigation.navigate("Dashboard");
		}
	}

	function validateForm() {
		if (!email) {
			setErrorMsg("Please enter an email address");
			return false;
		} else if (password !== passwordConfirm || password.length < 1) {
			setErrorMsg("Passwords do not match");
			return false;
		} else {
			return true;
		}
	}

	function sendNewUser() {
		// This will post a new user.
		const newUser = {
			email: email,
			password: password,
			number: number,
		};
	}

	function handleSignUp() {
		console.log("password", password);
		console.log("passlength", password.length);
		if (validateForm()) {
			navigation.navigate("Login");
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
