import React from "react";
import { View, Pressable, Dimensions, Text } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from './CustomTabBarStylessheet';

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        console.log(options.tabBarLabel)
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

        const isFocused = index === state.index;

        const handlePress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
        
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={styles.iconContainer}>
            <Pressable
              onPress={handlePress}
              style={{ backgroundColor: "#25292e", borderRadius: 20 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15 }}>
                <Icon name={label} size={30} color={isFocused ? 'blue' : 'gray'} />
                <Text style={{ color: isFocused ? 'white' : 'gray' }}>{label}</Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

export default TabBar;
