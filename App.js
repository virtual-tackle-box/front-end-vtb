import Login from './components/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './components/Dashboard/Dashboard.js';
import AddCatch from './components/AddCatch/AddCatch';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          options={{
            headerShown: false
          }}
          component={Login}
        />
        <Stack.Screen
          name='Dashboard'
          options={{
            headerShown: false
          }}
          component={Dashboard}
        />
        <Stack.Screen
          name='AddCatch'
          options={{
            headerShown: false
          }}
          component={AddCatch}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
