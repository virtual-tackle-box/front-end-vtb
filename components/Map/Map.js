import React from 'react';
import MapView  from 'react-native-maps';
import {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function TestMap() {

    const testPin = {
       coordinates: {
        latitude: 40.428712,
        longitude: -105.033767,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
       },
       title:'Bass',
       description:'3lbs'
    }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker 
            coordinate={testPin.coordinates}
            title={testPin.title}
            description={testPin.description}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
