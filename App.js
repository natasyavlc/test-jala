/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import RootNavigation from './Navigation/rootNavigation';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <RootNavigation />
    </PaperProvider>
  );
};

export default App;
