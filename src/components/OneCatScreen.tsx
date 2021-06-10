import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import {toggle_app_loading} from '../store/actionCreators/appActionCreators';
import {useDispatch} from 'react-redux';

const OneCatScreen = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>21212</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});
export default OneCatScreen;
