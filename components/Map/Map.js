import React from "react";

import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import { styles } from "./MapStylesheet";

export default function TestMap() {
	let Marker;
	let MapView;
	let onWeb = false;
	if (Platform.OS !== "web") {
		MapView = require("react-native-maps").default;
		Marker = require("react-native-maps").Marker;
	} else {
		onWeb = true;
	}

	const testPin = {
		coordinates: {
			latitude: 40.428712,
			longitude: -105.033767,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		title: "Bass",
		description: "3lbs",
	};

	const mapView =
		onWeb === false ? (
			<View style={styles.container}>
				<MapView style={styles.map}>
					<Marker
						coordinate={testPin.coordinates}
						title={testPin.title}
						description={testPin.description}
					/>
				</MapView>
			</View>
		) : (
			<View style={styles.container}>
				<Text>Map not supported in Web Mode!</Text>
			</View>
		);

	return mapView;
}
