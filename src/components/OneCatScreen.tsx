import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  Pressable,
} from 'react-native';
import {toggle_app_loading} from '../store/actionCreators/appActionCreators';
import {useDispatch} from 'react-redux';

type OneCatScreenProps = {
  route: any;
};
const width = Dimensions.get('window').width - 40;

const OneCatScreen = ({route}: OneCatScreenProps) => {
  const dispatch = useDispatch();
  const {catItem} = route.params;

  return (
    <SafeAreaView style={styles.catContainer}>
      <View style={styles.imageContainer}>
        <Image source={catItem.image} style={styles.image}></Image>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.breedText}>{catItem.name}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={styles.descriptionText}>
          {catItem.description}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={[styles.button, {marginRight: 20}]}>
          <Text style={styles.buttonText}>Другое фото</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Добавить в избранное</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  catContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  dataContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  image: {
    alignSelf: 'center',
    height: width,
    width: width,
    borderRadius: 10,
  },
  imageContainer: {
    marginVertical: 10,
    borderColor: 'white',
    borderRadius: 10,
    shadowColor: '#9370DA',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: 'white',
  },
  breedText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  buttonsContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  button: {
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: '#9370DA',
    fontWeight: 'bold',
  },
});
export default OneCatScreen;
