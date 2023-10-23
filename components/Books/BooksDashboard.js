import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Animated,
	Touchable,
	TouchableOpacity,
	ImageBackground,
	Image,
} from "react-native";
import { styles } from "./BooksDashStylesheet";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import tackleIcon from "./tackle-boxicon.png";
import bookIcon from './open-book.png'

export default function BooksDashboard() {
	const navigation = useNavigation();
	const isFocused = useIsFocused();
	const [slideInAnim] = useState(new Animated.Value(0));

	useEffect(() => {
		if (isFocused) {
			Animated.timing(slideInAnim, {
				toValue: 1,
				duration: 400,
				useNativeDriver: true,
			}).start();
		} else {
			slideInAnim.setValue(0);
		}
	}, [isFocused]);

	const slideInStyle = {
		transform: [
			{
				translateX: slideInAnim.interpolate({
					inputRange: [0, 1],
					outputRange: [-300, 0],
				}),
			},
		],
	};

	function navToCatchLog() {
		navigation.navigate("CatchLog");
	}

	function navToTackle() {
		navigation.navigate("Tackle");
	}

	return (
		<Animated.View style={[styles.container, slideInStyle]}>
			<TouchableOpacity style={styles.dataContainer} onPress={navToTackle}>
				<View style={styles.imageContainer}>
					<Image style={styles.images} source={tackleIcon} />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>Lures</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.dataContainer} onPress={navToCatchLog}>
      <View style={styles.imageContainer}>
					<Image style={styles.images} source={bookIcon} />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>Catch Log</Text>
				</View>
			</TouchableOpacity>
		</Animated.View>
	);
}
