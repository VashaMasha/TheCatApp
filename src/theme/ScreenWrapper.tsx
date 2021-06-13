import React from 'react';
import {Image, StyleSheet, SafeAreaView, Pressable, View} from 'react-native';
import BackIcon from '../assers/images/backIcon.png';
import {useNavigation} from '@react-navigation/native';

type ScreenWrapperProps = {
  children: any;
  showBackButton?: boolean;
};

const ScreenWrapper = ({...props}: ScreenWrapperProps) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {props.showBackButton && (
        <View style={styles.iconContainer}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image source={BackIcon}></Image>
          </Pressable>
        </View>
      )}
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  iconContainer: {
    height: 44,
    width: 44,
    marginBottom: 10,
    borderColor: 'white',
    borderRadius: 30,
    backgroundColor: 'white',
  },
  backButton: {
    alignSelf: 'center',
    marginTop: 15,
  },
});

export default ScreenWrapper;