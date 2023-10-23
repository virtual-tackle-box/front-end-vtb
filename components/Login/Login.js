import React from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginStyles';
import { useUserContext } from '../UserContext/UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  const {setUserID} = useUserContext();

  const navigation = useNavigation();
  
  //Does nothing. this will live in Api calls
  // function getUserId(){

  // }
  async function handleLogin(option) {
    if(option === 'guest'){
      setUserID(1)
      navigation.navigate('Dashboard')
    }
    else if (!email || !password) {
      setErrorMsg('Invalid login credentials')
      return;
    } else {
      try{
        setErrorMsg('')
        const userData = {
          email: email,
          password: password,
        }

        //send request for userID
        //const userid = await getUserID(userData);
        
        setUserID(3);
        navigation.navigate('Dashboard')
    }
    catch (error){
      setErrorMsg(error.message)
    }
  }
}

  function goToSignup(){
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/tackleboxlogo.png')}
          style={styles.logoImage}
          resizeMode='contain'
        />
      </View>
      <View style={styles.loginContainer}>
        <TextInput
          testID='email-input'
          maxLength={12}
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          testID='password-input'
          maxLength={16}
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.loginButtonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            testID='login-button'
            color='white'
            title='Login'
            onPress={() => handleLogin()}
          />
        </View>
        <View>
        <Text style={styles.text}></Text>
        </View>
        <View style={styles.guestButtonContainer}>
          <Button
            testID='guest-login-button'
            color='white'
            title='Login as guest'
            onPress={() => handleLogin('guest')}
          />
        </View>
        </View>
        <View style={styles.signUpText}>
          <Text style={styles.signUpText}>Dont have an account?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            testID='signup-button'
            color='white'
            title='Sign Up'
            onPress={() => goToSignup()}
          />
        </View>
        {errorMsg && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMsg}</Text>
            </View>
        )}
      </View>
    </View>
  );
}

export default Login;
