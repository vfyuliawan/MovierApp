/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppNavigation from './lib/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation></AppNavigation>
    </NavigationContainer>
  );
};

export default App;
