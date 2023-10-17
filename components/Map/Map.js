import React from "react";
import { useState, useEffect, useRef } from "react";

import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import { styles } from "./MapStylesheet";
import * as Location from "expo-location";

export default function TestMap() {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	let mapRef = useRef(null);
	let Marker;
	let MapView;
	let onWeb = false;

	if (Platform.OS !== "web") {
		MapView = require("react-native-maps").default;
		Marker = require("react-native-maps").Marker;
	} else {
		onWeb = true;
	}

	useEffect(() => {
		if (mapRef.current && location) {
			mapRef.current.animateToRegion(
				{
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				},
				1000
			);
		}
	}, [location]);

	useEffect(() => {
		async function getLocation() {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}
			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		}
		getLocation();
	}, []);


	let answer = "Waiting for location...";
	if (errorMsg) {
		answer = errorMsg;
	} else if (location) {
		answer = JSON.stringify(location);
	}

	const mapView = onWeb === false && location ? (
			<View style={styles.container}>
				<MapView
					ref={mapRef}
					style={styles.map}
          mapType = 'satellite'
					
				>
					<Marker
						coordinate={{
							latitude: location.coords.latitude,
							longitude: location.coords.longitude,
						}}
            draggable
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
