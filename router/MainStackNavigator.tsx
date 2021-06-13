import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import OneCatScreen from '../src/components/OneCatScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();
const defaultOptions: StackNavigationOptions = {
  headerShown: false,
};

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen name="Breeds" component={BottomTabNavigator} />
      <Stack.Screen name="OneCat" component={OneCatScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
