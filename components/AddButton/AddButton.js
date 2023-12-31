import { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  ImageBackground,
  Easing
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import fishIcon from './fishIconNoBack.png';

import { styles } from './AddButtonStylesheet';

import PropTypes from 'prop-types';

import { useUserContext } from '../UserContext/UserContext';

export default function AddButton({ toggleForm, tabPressed, setTabPressed }) {
  const navigation = useNavigation();

  const [addFish] = useState(new Animated.Value(40));
  const [addLure] = useState(new Animated.Value(40));
  const [opacity] = useState(new Animated.Value(0));

  const [isMenuOpen, setMenuOpen] = useState(false);
  const { setShowMarker } = useUserContext();

  function navigateToLure() {
    navigation.navigate('AddLure');
  }

  const openMenu = () => {
    setMenuOpen(true);
    Animated.timing(addFish, {
      toValue: 130,
      duration: 400,
      useNativeDriver: false
    }).start();
    Animated.timing(addLure, {
      toValue: 200,
      duration: 400,
      useNativeDriver: false
    }).start();

    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  };

  const closeMenu = () => {
    setMenuOpen(false);
    Animated.timing(addFish, {
      toValue: 40,
      duration: 800,
      useNativeDriver: false
    }).start();
    Animated.timing(addLure, {
      toValue: 40,
      duration: 800,
      useNativeDriver: false
    }).start();

    Animated.timing(opacity, {
      toValue: 0,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  };

  useEffect(() => {
    if (tabPressed) {
      closeMenu();
      setTabPressed(false);
    }
  }, [tabPressed]);

  return (
    <View style={styles.mainContainer}>
      <Animated.View
        style={[styles.addButtons, { bottom: addFish, opacity: opacity }]}
      >
        <ImageBackground
          source={fishIcon}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <TouchableOpacity
            onPress={() => {
              closeMenu();
              toggleForm();
            }}
          >
            <Text testID='fish-fins-icon' style={styles.buttonText}>
              Add Catch
            </Text>
            {/* <Icon testID="fish-fins-icon" name="book" size={35} color="white" /> */}
          </TouchableOpacity>
        </ImageBackground>
      </Animated.View>
      <Animated.View
        style={[styles.addButtons, { bottom: addLure, opacity: opacity }]}
      >
        <ImageBackground
          source={fishIcon}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <TouchableOpacity
            onPress={() => {
              closeMenu();
              navigateToLure();
            }}
          >
            <Text testID='lure-icon' style={styles.buttonText}>
              Add Lure
            </Text>
            {/* <Icon testID="lure-icon" name="superpowers" size={35} color="white" /> */}
          </TouchableOpacity>
        </ImageBackground>
      </Animated.View>

      <TouchableOpacity
        testID='add-button'
        style={styles.circleButton}
        onPress={() => {
          isMenuOpen === false
            ? (() => {
                setShowMarker(true);
                openMenu();
              })()
            : (() => {
                closeMenu();
                setShowMarker(false);
              })();
        }}
      >
        <Icon
          testID='plus-icon'
          name={isMenuOpen ? 'minus' : 'plus'}
          size={40}
          color='white'
        ></Icon>
      </TouchableOpacity>
    </View>
  );
}

AddButton.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  tabPressed: PropTypes.bool.isRequired,
  setTabPressed: PropTypes.func.isRequired
};

useUserContext.propTypes = {
  setShowMarker: PropTypes.func.isRequired
};
