import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import CustomTabBar from '../CustomTabBar/CustomTabBar';
import UserMap from '../Map/UserMap';
import BooksDashboard from '../Books/BooksDashboard';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  const navigation = useNavigation();

  const [markerPosition, setMarkerPosition] = useState('');
  console.log("Marker Position in Dash", markerPosition)
  function toggleForm() {
    const lat = markerPosition.latitude;
    const lon = markerPosition.longitude;
    console.log("Lat in toggle", lat),
    console.log("long in toggle",lon)
    navigation.navigate('AddCatch', { lat: lat, lon: lon });
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
