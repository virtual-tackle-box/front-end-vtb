import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { styles } from './TestLogBookStyleSheet';
import { useIsFocused } from '@react-navigation/native';

export default function TestLogBook() {
  const isFocused = useIsFocused();
  const [slideInAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isFocused) {
      Animated.timing(slideInAnim, {
        toValue: 1,
        duration: 400, 
        useNativeDriver: true, 
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
          outputRange: [-300, 0], 
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.container, slideInStyle]}>
      <View style={styles.dataContainer}>
        <Text>Lures</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text>Catch Log</Text>
      </View>
    </Animated.View>
  );
}

