/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {WelcomeScreen} from './screens/WelcomeScreen';
import {UserScreen} from './screens/UserScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3c0a6b',
          },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          // drawerStyle: {
          //   backgroundColor: '#ccc',
          // },
        }}>
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({color, size}) => (
              <Ionicons name="home" size={30} color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons name="person" size={30} color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

export default App;
