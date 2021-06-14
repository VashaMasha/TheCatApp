import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
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
              <View style={styles.activeTab}>
                <Image source={HomeIconActive} />
              </View>
            ) : (
              <View
                style={styles.inActiveTab}>
                <Image source={HomeIconInactive} />
              </View>
            ),
        })}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesStackNavigator}
        options={() => ({
          title: '',
          tabBarIcon: ({focused}: any) =>
            focused ? (
              <View style={styles.activeTab}>
                <Image source={HartIconActive} />
              </View>
            ) : (
              <View style={styles.inActiveTab}>
                <Image source={HartIconInactive} />
              </View>
            ),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  activeTab: {
    marginTop: 30,
    padding: 10,
    borderColor: 'white',
    borderRadius: 26,
    borderWidth: 1,
    shadowColor: '#5533EA',
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: 'white',
  },
  inActiveTab: {
    marginTop: 30,
    padding: 10,
    borderColor: 'white',
    borderRadius: 26,
    borderWidth: 1,
    shadowColor: '#5533EA',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: 'white',
  },
});


export default BottomTabs;
