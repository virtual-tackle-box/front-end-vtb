import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import dashboardStyles from './DashboardStylesheet';
import UserMap from '../Map/UserMap';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

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

  return dashboard;
}

// const photo = {
//   assetId: null,
//   base64: null,
//   duration: null,
//   exif: null,
//   fileName: null,
//   fileSize: 5765169,
//   height: 3026,
//   type: 'image',
//   uri: 'file:///var/mobile/Containers/Data/Application/5651B8D3-2E80-47BD-8E97-E774C6C34777/Library/Caches/ExponentExperienceData/%2540anonymous%252Fvtb-3b7d19a1-a787-494c-8528-3863bc90c31c/ImagePicker/72AEA194-B1E0-48DF-BCF6-E84A0035EBB3.jpg',
//   width: 3024
// };
