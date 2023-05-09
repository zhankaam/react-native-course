/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {WelcomeScreen} from './screens/WelcomeScreen';
import {UserScreen} from './screens/UserScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

Ionicons.loadFont();

const BottomTab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3c0a6b',
          },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b',
        }}>
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

export default App;
