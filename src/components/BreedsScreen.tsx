import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import {getCats} from '..//api';
import {toggle_app_loading} from '../store/actionCreators/appActionCreators';
import {useDispatch} from 'react-redux';

const CatItemList = (item: any) => {
  const catItem = item.item;

  return (
    <SafeAreaView style={styles.itemContainer}>
      <Image source={catItem.image} style={styles.image}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{catItem.name}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={styles.descriptionText}>
          {catItem.description}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const BreedScreen = () => {
  const [catsArray, setCatsArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggle_app_loading(true));
    getCats()
      .then((res: any) => setCatsArray(res))
      .catch((err: any) => console.log(err))
      .finally(() => dispatch(toggle_app_loading(false)));
  }, []);

  return (
    <FlatList
      data={catsArray}
      keyExtractor={item => item.id}
      renderItem={({item}) => <CatItemList item={item} />}
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
  headerText: {
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
