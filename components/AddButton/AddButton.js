import { View, TouchableOpacity, StyleSheet, Animated, Text, ImageBackground, Easing} from "react-native";
import { styles } from "./AddButtonStylesheet";
import { useState, useEffect} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import fishIcon from './fishIconNoBack.png'


export default function AddButton({ toggleForm, tabPressed, setTabPressed }) {
	const navigation = useNavigation();

	const [addFish] = useState(new Animated.Value(40));
	const [addLure] = useState(new Animated.Value(40));
	const [opacity] = useState(new Animated.Value(0));

	const [isMenuOpen, setMenuOpen] = useState(false);

	function navigateToLure() {
		navigation.navigate("AddLure");
	}

	const openMenu = () => {
		setMenuOpen(true);
		Animated.timing(addFish, {
			toValue: 130,
			duration: 400,
			useNativeDriver: false,
		}).start();
		Animated.timing(addLure, {
			toValue: 200,
			duration: 400,
			useNativeDriver: false,
		}).start();

		Animated.timing(opacity, {
      toValue: 1, 
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false, 
    }).start();
	};

	const closeMenu = () => {
		setMenuOpen(false);
		Animated.timing(addFish, {
			toValue: 40,
			duration: 800,
			useNativeDriver: false,
		}).start();
		Animated.timing(addLure, {
			toValue: 40,
			duration: 800,
			useNativeDriver: false,
		}).start();
		
		Animated.timing(opacity, {
      toValue: 0, 
      duration: 400,
      easing: Easing.linear, 
      useNativeDriver: false, 
    }).start();
	};

	useEffect(() => {
		if(tabPressed){
			closeMenu();
			setTabPressed(false);
		}
	},[tabPressed])

	return (
		<View style={styles.mainContainer}>
			<Animated.View style={[styles.addButtons, { bottom: addFish , opacity: opacity}]}>
				<ImageBackground source={fishIcon} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity
					onPress={() => {
						closeMenu();
						toggleForm();
					}}
				>
					<Text style={styles.buttonText}>Add Catch</Text>
					{/* <Icon testID="fish-fins-icon" name="book" size={35} color="white" /> */}
				</TouchableOpacity>
				</ImageBackground>
			</Animated.View>
			<Animated.View style={[styles.addButtons, { bottom: addLure , opacity: opacity }]}>
			<ImageBackground source={fishIcon} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity
					onPress={() => {
						closeMenu();
						navigateToLure();
					}}
				>
					<Text style={styles.buttonText} >Add Lure</Text>
					{/* <Icon testID="lure-icon" name="superpowers" size={35} color="white" /> */}
				</TouchableOpacity>
				</ImageBackground>
			</Animated.View>

			<TouchableOpacity
				testID="add-button"
				style={styles.circleButton}
				onPress={() => {
					isMenuOpen === false ? openMenu() : closeMenu();
				}}
			>
				<Icon
					testID="plus-icon"
					name={isMenuOpen ? "minus" : "plus"}
					size={40}
					color="white"
				></Icon>
			</TouchableOpacity>
		</View>
	);
}
