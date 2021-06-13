import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import {getCats} from '..//api';
import {toggle_app_loading} from '../store/actionCreators/appActionCreators';
import {useDispatch} from 'react-redux';

type BreedScreenProps = {
  navigation: any;
};

const BreedScreen = ({navigation}: BreedScreenProps) => {
  const [catsArray, setCatsArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggle_app_loading(true));
    getCats()
      .then((res: any) => setCatsArray(res))
      .catch((err: any) => console.log(err))
      .finally(() => dispatch(toggle_app_loading(false)));
  }, []);

  const onCatPress = (catItem: any) => {
    navigation.navigate('OneCat', {catItem});
  };

  return (
    <FlatList
      data={catsArray}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Pressable
          style={styles.itemContainer}
          onPress={() => onCatPress({image: item.image, name: item.name,  description: item.description})}>
          <Image source={item.image} style={styles.image}></Image>
          <View style={styles.textContainer}>
            <Text style={styles.breedText}>{item.name}</Text>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.descriptionText}>
              {item.description}
            </Text>
          </View>
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
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
  image: {
    marginRight: 10,
    height: 100,
    width: 100,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  breedText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flex: 1,
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
});
export default BreedScreen;
