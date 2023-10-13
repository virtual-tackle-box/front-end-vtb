import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import dashboardStyles from './DashboardStylesheet';

export default function Dashboard() {
  const dashboard = (
    <View testID='dashboard-container' style={dashboardStyles.container}>
      {/* Map Icon */}
      <View testID='dashboard-icon' style={dashboardStyles.iconEl}>
        <Icon testID='icon-map' name='map' size={35} color='grey'></Icon>
        <Text testID='icon-text' style={dashboardStyles.text}>
          Map
        </Text>
      </View>
      {/* Add Icon */}
      <View testID='dashboard-icon' style={dashboardStyles.iconEl}>
        <Icon testID='icon-plus' name='plus' size={35} color='grey'></Icon>
        <Text testID='icon-text' style={dashboardStyles.text}>
          Add
        </Text>
      </View>
      {/* Logbook Icon */}
      <View testID='dashboard-icon' style={dashboardStyles.iconEl}>
        <Icon testID='icon-logbook' name='book' size={35} color='grey'></Icon>
        <Text testID='icon-text' style={dashboardStyles.text}>
          Logbook
        </Text>
      </View>
    </View>
  );

  return dashboard;
}
