import React, { useState, useEffect, useRef } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Platform,
	Animated,
	ImageBackground,
} from "react-native";
import { styles } from "./UserMapStylesheet";
import * as Location from "expo-location";
import { useIsFocused } from "@react-navigation/native";
import UsaMap from "./usaMap.jpeg";

export default function UserMap({ setMarkerPosition }) {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [slideInAnim] = useState(new Animated.Value(0));
	const [catchMarkers, setCatchMarkers] = useState([]);
	const [catches, setCatches] = useState([]);

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
	//This will be implemented once we have API calls
	// useEffect(() => {
	// 	async function gatherCatchesData() {
	// 		try {
	// 			const response = await fetchCatches("url");
	// 			if (!response.ok) {
	// 				setErrorMsg("There was an issue gathering catch data");
	// 			}
	// 			const data = response.json();
	// 			setCatches(data);
	// 		} catch (error) {
	// 			setErrorMsg(error.msg);
	// 		}
	// 	}
	// }, []);

	useEffect(() => {
		const newCatchMarkers = catches.map((catchData) => {
			return {
				id: catchData.id,
				coordinates: {
					latitude: catchData.latitude,
					longitude: catchData.longitude,
				},
				title: catchData.species,
				description: catchData.weight,
			};
		});

		setCatchMarkers(newCatchMarkers);
	}, [catches]);

	useEffect(() => {
		if (markerRef.current) {
			setTimeout(() => {
				displayCallout();
			}, 1000);
		}
	}, [location]);

	useEffect(() => {
		if (mapRef.current && location !== "denied") {
			mapRef.current.animateToRegion(
				{
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				},
				2000
			);
		} else if (mapRef.current && location === "denied") {
			mapRef.current.animateToRegion(
				{
					latitude: 39.8283,
					longitude: 98.5795,
					latitudeDelta: 14,
					longitudeDelta: 14,
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
				setLocation("denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});

			setLocation(location);

			const locObj = {
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			};
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
				translateY: slideInAnim.interpolate({
					inputRange: [0, 1],
					outputRange: [300, 0],
				}),
			},
		],
	};

	//title species
	//info weight

	const catchMarkerComponents = catchMarkers.map((marker) => (
		<Marker
			key={marker.id}
			coordinate={marker.coordinates}
			title={marker.species}
			description={marker.weight}
		>
			<Callout>
				<Text>{marker.species}</Text>
				<Text>{marker.weight}</Text>
			</Callout>
		</Marker>
	));

	const mapView =
		onWeb === true ? (
			<View style={styles.container}>
				<Text>Map not supported in Web Mode!</Text>
			</View>
		) : location === null ? (
			<ImageBackground
				source={UsaMap}
				style={styles.backgroundImage}
				resizeMode="contain"
			>
				<View style={styles.textContainer}>
					<Text style={styles.waitText}>Awaiting location...</Text>
				</View>
			</ImageBackground>
		) : location === "denied" ? (
			<Animated.View style={[styles.container, slideInStyle]}>
				<MapView ref={mapRef} style={styles.map} mapType="satellite"></MapView>
			</Animated.View>
		) : (
			<Animated.View style={[styles.container, slideInStyle]}>
				<MapView ref={mapRef} style={styles.map} mapType="satellite">
					<Marker
						ref={markerRef}
						coordinate={{
							latitude: location.coords.latitude,
							longitude: location.coords.longitude,
						}}
						draggable
						onDragEnd={(e) => {
							setMarkerPosition(e.nativeEvent.coordinate);
						}}
					>
						<Callout>
							<Text>Drag to place</Text>
						</Callout>
					</Marker>
					{catchMarkerComponents}
				</MapView>
			</Animated.View>
		);

	return mapView;
}
