import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import OneCatScreen from '../src/components/OneCatScreen';
import BreedScreen from '../src/components/BreedsScreen';

const Stack = createStackNavigator();
const defaultOptions: StackNavigationOptions = {
  headerShown: false,
};

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen name="Breeds" component={BreedScreen} />
      <Stack.Screen name="OneCat" component={OneCatScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
