import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Animated,
  Touchable,
  TouchableOpacity
} from 'react-native';
import { styles } from './BooksDashStylesheet';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export default function BooksDashboard() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [slideInAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isFocused) {
      Animated.timing(slideInAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true
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
          outputRange: [-300, 0]
        })
      }
    ]
  };

  function navToCatchLog() {
    navigation.navigate('CatchLog');
  }

  function navToTackle() {
    navigation.navigate('Tackle');
  }

  return (
    <Animated.View style={[styles.container, slideInStyle]}>
      <TouchableOpacity style={styles.dataContainer} onPress={navToTackle}>
        <View style={styles.dataContainer}>
          <Text>Lures</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dataContainer} onPress={navToCatchLog}>
        <View style={styles.dataContainer}>
          <Text>Catch Log</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
