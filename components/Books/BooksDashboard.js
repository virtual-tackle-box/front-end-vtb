import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Animated,
  Touchable,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { styles } from './BooksDashStylesheet';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import tackleIcon from './tackle-boxicon.png'

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
      <ImageBackground source={tackleIcon} style={{ flex: 0.4, justifyContent: "center", alignItems: "center", width: '90%', height: '90%'}} resizeMode='contain'>
        <TouchableOpacity style={styles.dataContainer} onPress={navToTackle}>
          <View style={styles.dataContainer}>
            <Text>Lures</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
      <ImageBackground source={tackleIcon} style={{ flex: 0.4, justifyContent: "center", alignItems: "center", width: '90%', height: '90%'}} resizeMode='contain'>
      <TouchableOpacity style={styles.dataContainer} onPress={navToCatchLog}>
        <View style={styles.dataContainer}>
          <Text>Catch Log</Text>
        </View>
      </TouchableOpacity>
      </ImageBackground>
    </Animated.View>
  );
  
  }