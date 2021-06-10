/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import FullScreenLoader from './src/components/FullScreenLoader';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './router/index';
import MainStackNavigator from './router/MainStackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <MainStackNavigator />
        </NavigationContainer>
      </PersistGate>
      <FullScreenLoader />
    </Provider>
  );
};

export default App;
