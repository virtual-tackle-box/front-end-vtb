import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from './LoginStyles'


function Login(){

    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigation = useNavigation();

    function handleLogin(name,password){
        if(!name || !password){
            return;
        }
        else{
            navigation.navigate("Dashboard")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/tackleboxlogo.png')}
                    style={styles.logoImage}
                    resizeMode="contain"
                    />
            </View>
            <View style={styles.loginContainer}>
                <TextInput
                    testID='userName-input'
                    maxLength={12}
                    style={styles.input}
                    placeholder="Username"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    testID='password-input'
                    maxLength={16}
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        testID='login-button' 
                        color='white'
                        title="Login" 
                        onPress={() => handleLogin(name,password)}/>
                </View>
            </View>
        </View>
    )
}



export default Login;
                
