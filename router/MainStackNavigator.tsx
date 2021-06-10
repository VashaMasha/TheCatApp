import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BreedsScreen from '../src/components/BreedsScreen';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Breeds" component={BreedsScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;