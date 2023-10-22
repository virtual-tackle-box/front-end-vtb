import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import dashboardStyles from './DashboardStylesheet';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../CustomTabBar/CustomTabBar';
import UserMap from '../Map/UserMap';
import AddButton from '../AddButton/AddButton';
import { useNavigation } from '@react-navigation/native';
import BooksDashboard from '../Books/BooksDashboard';
import { useUserContext } from '../UserContext/UserContext';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  const [showMarker, setShowMarker] = useState(false);
  const navigation = useNavigation();
  
  const [markerPosition, setMarkerPosition] = useState('');
	const {userID} = useUserContext();


  function toggleForm() {
    console.log('MARKER POSITION IN TOGGLE', markerPosition);
    const lat = markerPosition.latitude;
    const lon = markerPosition.longitude;
    navigation.navigate('AddCatch', { lat: lat, lon: lon });
  }

  function toggleMarker() {
    setShowMarker(!showMarker);
  }

  const dashboard = (
    <Tab.Navigator
      initialRouteName={'map'}
      tabBar={props => <CustomTabBar {...props} toggleForm={toggleForm} />}
    >
      <Tab.Screen
        name='map'
        children={() => <UserMap setMarkerPosition={setMarkerPosition} />}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name='book'
        component={BooksDashboard}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name='Fake'
        component={Map}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );

  return dashboard;
}

