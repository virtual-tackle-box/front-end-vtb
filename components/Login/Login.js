import React from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginStyles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function handleLogin() {
    if (!email || !password) {
      return;
    } else {
      navigation.navigate('Dashboard');
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
        <View style={styles.buttonContainer}>
          <Button
            testID='login-button'
            color='white'
            title='Login'
            onPress={() => handleLogin()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            testID='signup-button'
            color='white'
            title='SignUp'
            onPress={() => goToSignup()}
          />
        </View>
      </View>
    </View>
  );
}

export default Login;
