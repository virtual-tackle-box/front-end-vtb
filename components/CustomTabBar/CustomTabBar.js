import React, { useState } from 'react';
import {
  View,
  Pressable,
  Dimensions,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './CustomTabBarStylessheet';

import AddButton from '../AddButton/AddButton';

import PropTypes from 'prop-types';
import { useUserContext } from "../UserContext/UserContext";
function TabBar({ state, descriptors, navigation, toggleForm }) {

	const [tabPressed, setTabPressed] = useState(false);
	const {setShowMarker} = useUserContext();

  return (
    <View testID='dashboard-container' style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        if (route.name === 'Fake') {
          return (
            <View key={index}>
              <AddButton
                toggleForm={toggleForm}
                tabPressed={tabPressed}
                setTabPressed={setTabPressed}
              />
            </View>
          );
        }
        const { options } = descriptors[route.key];
        const label = route.name;
        const isFocused = index === state.index;

        const handlePress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key
          });

					if (!isFocused && !event.defaultPrevented) {
						setShowMarker(false)
						setTabPressed(true);
						navigation.navigate(route.name);
					}
				};

        return (
          <View
            testID='dashboard-icon'
            key={index}
            style={styles.iconContainer}
          >
            <Pressable
              onPress={handlePress}
              style={{
                backgroundColor: isFocused ? 'black' : '#25292e',
                borderRadius: 20
              }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: 15
                }}
              >
                <Icon
                  testID={`fa-icon-${label}`}
                  name={label}
                  size={30}
                  color={isFocused ? 'green' : 'gray'}
                />
                <Text
                  testID={label}
                  style={{ color: isFocused ? 'white' : 'gray' }}
                >
                  {label}
                </Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

export default TabBar;

TabBar.propTypes = {
  state: PropTypes.shape({
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    index: PropTypes.number.isRequired
  }).isRequired,
  descriptors: PropTypes.object.isRequired,
  navigation: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }),
  toggleForm: PropTypes.func.isRequired
};
