import Login from './components/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddCatch from './components/AddCatch/AddCatch';
// import Dashboard from './components/Dashboard/Dashboard';

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

{/*  <Stack.Screen
   name='Dashboard'
   options={{
     headerShown: false
   }}
   component={Dashboard}
 /> */}