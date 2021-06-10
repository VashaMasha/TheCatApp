/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {persistor, store} from './src/store/store';
import BreedScreen from './src/components/BreedsScreen';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import FullScreenLoader from './src/components/FullScreenLoader';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BreedScreen />
      </PersistGate>
      <FullScreenLoader />
    </Provider>
  );
};

export default App;
