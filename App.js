import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {UserContextProvider} from './components/UserContext/UserContext';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard.js';
import AddCatch from './components/AddCatch/AddCatch';

import SignUp from './components/SignUp/SignUp';

import AddLure from './components/AddLure/AddLure';

import Tackle from './components/Books/Tackle/Tackle';
import CatchLog from './components/Books/CatchLog/CatchLog';
import BooksDashboard from './components/Books/BooksDashboard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserContextProvider>
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
          name='SignUp'
          options={{
            headerShown: false
          }}
          component={SignUp}
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
        
        <Stack.Screen
          name='AddLure'
          options={{
            headerShown: false
          }}
          component={AddLure}
        />

        <Stack.Screen
          name='Tackle'
          options={{
            headerShown: false
          }}
          component={Tackle}
        />

        <Stack.Screen
          name='CatchLog'
          options={{
            headerShown: false
          }}
          component={CatchLog}
        />

        {/* <Stack.Screen
          name='BooksDashboard'
          options={{
            headerShown: false
          }}
          component={BooksDashboard}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </UserContextProvider>
  );
}
