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
		console.log("ON WEB");
		onWeb = true;
	}

  useEffect(() => {
    if(mapRef.current && location){
      console.log("LOCATION test", location)
      mapRef.current.animateToRegion({
        
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: .01,
        longitudeDelta: .01,
        }, 1000)
        
      }
    

  },[location])

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
		console.log("LOCATION:", answer);
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
		onWeb === false && location ? (
			<View  style={styles.container}>
				<MapView ref={mapRef} style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
					<Marker
						coordinate={{latitude: location.coords.latitude,
            longitude: location.coords.longitude}}
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
