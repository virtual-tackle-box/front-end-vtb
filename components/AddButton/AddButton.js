import { View, TouchableOpacity, StyleSheet, Animated, Text } from "react-native";
import { styles } from './AddButtonStylesheet'
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';



export default function AddButton({toggleForm}){
    const navigation = useNavigation();

    const [addFish] = useState(new Animated.Value(40));
    const [addLure] = useState(new Animated.Value(40));

    const [isMenuOpen, setMenuOpen] = useState(false);

    function navigateToLure(){
        navigation.navigate('AddLure')
    }

    const openMenu = () =>{
        setMenuOpen(true);
        Animated.timing(addFish, {
            toValue: 130,
            duration: 200,
            useNativeDriver: false,
        }).start()
        Animated.timing(addLure, {
            toValue: 200,
            duration: 200,
            useNativeDriver: false,
        }).start()
    }

    const closeMenu = () =>{
        setMenuOpen(false);
        Animated.timing(addFish, {
            toValue: 40,
            duration: 200,
            useNativeDriver: false,
        }).start()
        Animated.timing(addLure, {
            toValue: 40,
            duration: 200,
            useNativeDriver: false,
        }).start()
    }

    return (
        <View style={styles.mainContainer}>
            <Animated.View style={[styles.buttonContainer, {bottom: addFish, opacity : isMenuOpen ? 1 : 0}]}>
                <TouchableOpacity onPress={() => toggleForm()}>
                    <Icon testID='fish-fins-icon' name='book' size={35} color='white'/>
                </TouchableOpacity>
										{/* <Text style={styles.buttonText}>Add catch</Text> */}
            </Animated.View>
            <Animated.View style={[styles.buttonContainer, {bottom: addLure, opacity : isMenuOpen ? 1 : 0}]}>
                <TouchableOpacity onPress={() => navigateToLure()}>
                    <Icon testID='lure-icon' name='superpowers' size={35} color='white'/>
										{/* <Text style={styles.buttonText}>Add lure</Text> */}
                </TouchableOpacity>
            </Animated.View>
            
            <TouchableOpacity
            testID='add-button'
            style={styles.circleButton}
            onPress={() => {
                isMenuOpen === false ? openMenu() : closeMenu()
            }
            }
            >
                <Icon testID='plus-icon' name={isMenuOpen ? 'minus' : 'plus'} size={40} color='white'></Icon>
            </TouchableOpacity>
        </View>
    )
}