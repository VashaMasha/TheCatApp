import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BreedsScreen from '../src/components/BreedsScreen';
import OneCatScreen from '../src/components/OneCatScreen';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Breeds" component={BreedsScreen} />
      <Stack.Screen name="OneCat" component={OneCatScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;