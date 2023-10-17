import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import dashboardStyles from './DashboardStylesheet';
import UserMap from '../Map/UserMap'
import { useState } from 'react'

export default function Dashboard() {
  const [showMarker, setShowMarker] = useState(false)
  
  function toggleMarker() {
    setShowMarker(!showMarker)
  }
  
  const dashboard = (
    <View style={dashboardStyles.dashContainer}>
      <View style={dashboardStyles.mapContainer}>
        <UserMap showMarker={showMarker} />
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
        <TouchableOpacity testID='dashboard-icon' style={dashboardStyles.iconEl} onPress={() => toggleMarker()}>
          <Icon testID='fa-icon-svg-plus' name='plus' size={35} color='grey'></Icon>
          <Text testID='icon-text' style={dashboardStyles.text}>
            Add
          </Text>
        </TouchableOpacity>
        {/* Logbook Icon */}
        <View testID='dashboard-icon' style={dashboardStyles.iconEl}>
          <Icon testID='fa-icon-logbook' name='book' size={35} color='grey'></Icon>
          <Text testID='icon-text' style={dashboardStyles.text}>
            Logbook
          </Text>
        </View>
      </View>
    </View>
  );

  return dashboard;
}
