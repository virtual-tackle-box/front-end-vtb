import Login from './components/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './components/DashBoard/Dashboard';

const Stack = createStackNavigator();

export default function App() {

  
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
            name='Login' 
            options={{ 
              headerShown: false,
            }}
            component={Login}
            />
            <Stack.Screen 
            name='Dashboard' 
            options={{ 
              headerShown: false,
            }}
            component={Dashboard}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  
  
  
          

