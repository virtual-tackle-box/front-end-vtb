import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import Login from './components/Login/Login.jsx';
import styles from './components/App/AppStyles.jsx'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/tackleboxlogo.png')}
          style={{ width: 350, height: 50 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.loginContainer}>
        <Login />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

