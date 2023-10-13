import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import Login from './components/Login/Login.jsx';
import styles from './components/App/AppStyles.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  
  const handleLogin = (name,password) => {
   
}
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
            name='Login' 
            component={Login}
            options={{ headerShown: false }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
          

