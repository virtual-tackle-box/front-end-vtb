import React, { useState, useEffect, useRef } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Platform,
	Animated,
} from "react-native";
import { styles } from "./UserMapStylesheet";
import * as Location from "expo-location";
import { useIsFocused } from "@react-navigation/native";

export default function UserMap({ showMarker }) {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [markerPosition, setMarkerPosition] = useState(null);
	const [slideInAnim] = useState(new Animated.Value(0));

	let mapRef = useRef(null);
	let markerRef = useRef(null);
	let Marker;
	let MapView;
	let Callout;
	let onWeb = false;

	if (Platform.OS !== "web") {
		MapView = require("react-native-maps").default;
		Marker = require("react-native-maps").Marker;
		Callout = require("react-native-maps").Callout;
	} else {
		onWeb = true;
	}

	function displayCallout() {
		if (markerRef.current) {
			markerRef.current.showCallout();
		}
	}

	useEffect(() => {
		if (showMarker && markerRef.current) {
			setTimeout(() => {
				displayCallout();
			}, 100);
		}
	}, [showMarker]);

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
			setMarkerPosition(location);
		}
		getLocation();
	}, []);

	const isFocused = useIsFocused();

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
					outputRange: [300, 0],
				}),
			},
		],
	};

	const mapView =
		onWeb === false && location ? (
			<Animated.View style={[styles.container, slideInStyle]}>
				<MapView ref={mapRef} style={styles.map} mapType="satellite">
					{showMarker && (
						<Marker
							ref={markerRef}
							coordinate={{
								latitude: location.coords.latitude,
								longitude: location.coords.longitude,
							}}
							draggable
							onDragEnd={(e) => {
								console.log(e.nativeEvent.coordinate);
								setMarkerPosition(e.nativeEvent.coordinate);
							}}
						>
							<Callout>
								<Text>Drag to place</Text>
							</Callout>
						</Marker>
					)}
				</MapView>
			</Animated.View>
		) : (
			<View style={styles.container}>
				<Text>Map not supported in Web Mode!</Text>
			</View>
		);

	return mapView;
}
