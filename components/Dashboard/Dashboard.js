import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import dashboardStyles from "./DashboardStylesheet";
import UserMap from "../Map/UserMap";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TestLogBook from "../TestLogBook/TestLogBook";
import CustomTabBar from "../CustomTabBar/CustomTabBar";
import AddButton from "../AddButton/AddButton";
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  const [showMarker, setShowMarker] = useState(false);
  const navigation = useNavigation();

  function toggleMarker() {
    setShowMarker(prev => !prev);
  }

  function toggleForm() {
    navigation.navigate('AddCatch');
  }

  const dashboard = (
    <View style={dashboardStyles.dashContainer}>
      <View style={dashboardStyles.mapContainer}>
        <UserMap showMarker={showMarker} />
        <Button title='Confirm' onPress={toggleForm} />
      </View>
      <View testID='dashboard-container' style={dashboardStyles.container}>
        {/* Map Icon */}
        <View testID='dashboard-icon' style={dashboardStyles.iconEl}>
          <Icon testID='fa-icon-map' name='map' size={35} color='grey'></Icon>
          <Text testID='icon-text' style={dashboardStyles.text}>
            Map
          </Text>
        </View>
        {/* Add Icon */}
        <TouchableOpacity
          testID='dashboard-icon'
          style={dashboardStyles.iconEl}
          onPress={() => toggleMarker()}
        >
          <Icon
            testID='fa-icon-svg-plus'
            name='plus'
            size={35}
            color='grey'
          ></Icon>
          <Text testID='icon-text' style={dashboardStyles.text}>
            Add
          </Text>
        </TouchableOpacity>
        {/* Logbook Icon */}
        <View testID='dashboard-icon' style={dashboardStyles.iconEl}>
          <Icon
            testID='fa-icon-logbook'
            name='book'
            size={35}
            color='grey'
          ></Icon>
          <Text testID='icon-text' style={dashboardStyles.text}>
            Logbook
          </Text>
        </View>
      </View>
    </View>
  );

	function toggleMarker() {
		setShowMarker(!showMarker);
	}

	// const dashboard = (
	//   <View style={dashboardStyles.dashContainer}>
	//     <View style={dashboardStyles.mapContainer}>
	//       <UserMap showMarker={showMarker} />
	//     </View>
	//     <View testID='dashboard-container' style={dashboardStyles.container}>
	//       {/* Map Icon */}
	//       <TouchableOpacity testID='dashboard-icon' style={dashboardStyles.iconEl}>
	//         <Icon testID='fa-icon-map' name='map' size={35} color='grey'></Icon>
	//         <Text testID='icon-text' style={dashboardStyles.text}>
	//           Map
	//         </Text>
	//       </TouchableOpacity>
	//       {/* Add Icon */}
	//       <TouchableOpacity testID='dashboard-icon' style={dashboardStyles.iconEl} onPress={() => toggleMarker()}>
	//         <Icon testID='fa-icon-svg-plus' name='plus' size={35} color='grey'></Icon>
	//         <Text testID='icon-text' style={dashboardStyles.text}>
	//           Add
	//         </Text>
	//       </TouchableOpacity>
	//       {/* Logbook Icon */}
	//       <TouchableOpacity testID='dashboard-icon' style={dashboardStyles.iconEl}>
	//         <Icon testID='fa-icon-logbook' name='book' size={35} color='grey'></Icon>
	//         <Text testID='icon-text' style={dashboardStyles.text}>
	//           Logbook
	//         </Text>
	//       </TouchableOpacity>
	//     </View>
	//   </View>
	// );

	const dashboard = (
		<Tab.Navigator
			initialRouteName={"map"}
			tabBar={(props) => <CustomTabBar {...props} />}
		>
			<Tab.Screen
				name="map"
				component={UserMap}
				options={{ headerShown: false }}
			/>

			<Tab.Screen
				name="book"
				component={TestLogBook}
				options={{ headerShown: false }}
			/>

			<Tab.Screen
				name="Fake"
				component={UserMap}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);

	return dashboard;
}
