import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import FavouritesScreen from '../src/components/BreedsScreen';

const Stack = createStackNavigator();
const defaultOptions: StackNavigationOptions = {
  headerShown: false,
};

export const FavouritesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
    </Stack.Navigator>
  );
};

export default FavouritesStackNavigator;
