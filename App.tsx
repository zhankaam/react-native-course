/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import CategoriesScreen from './screens/CategoriesScreen';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <CategoriesScreen />
    </>
  );
}

export default App;
