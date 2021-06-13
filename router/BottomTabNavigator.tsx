import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIconActive from '../src/assers/images/homeIconActive.png';
import HomeIconInactive from '../src/assers/images/homeIconInactive.png';
import HartIconInactive from '../src/assers/images/hartIconInactive.png';
import HartIconActive from '../src/assers/images/hartIconActive.png';
import BreedScreen from '../src/components/BreedsScreen';
import FavouritesScreen from '../src/components/FavouritesScreen';
import OneCatScreen from '../src/components/OneCatScreen';
import {MainStackNavigator} from '../router/MainStackNavigator';
import {FavouritesStackNavigator} from '../router/FavouritesStackNavigator';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={MainStackNavigator}
        options={() => ({
          title: '',
          tabBarIcon: ({focused}: any) =>
            focused ? (
              <Image source={HomeIconActive} />
            ) : (
              <Image source={HomeIconInactive} />
            ),
        })}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesStackNavigator}
        options={() => ({
          title: '111',
          tabBarIcon: ({focused}: any) =>
            focused ? (
              <Image source={HartIconActive} />
            ) : (
              <Image source={HartIconInactive} />
            ),
        })}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
