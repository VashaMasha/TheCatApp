import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Pressable,
  RefreshControl,
} from 'react-native';
import {getCats} from '..//api';
import {toggle_app_loading} from '../store/actionCreators/appActionCreators';
import {useDispatch} from 'react-redux';
import ScreenWrapper from '../theme/ScreenWrapper';

type BreedScreenProps = {
  navigation: any;
};

const BreedScreen = ({navigation}: BreedScreenProps) => {
  const [catsArray, setCatsArray] = useState([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const onCatPress = (catItem: any) => {
    navigation.navigate('OneCat', {catItem});
  };

  const getData = () => {
    dispatch(toggle_app_loading(true));
    getCats()
      .then((res: any) => setCatsArray(res))
      .catch((err: any) => console.log(err))
      .finally(() => dispatch(toggle_app_loading(false)));
  };

  const onRefreshHandler = () => {
    try {
      setRefreshing(true);
      getData();
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <ScreenWrapper>
      <FlatList
        data={catsArray}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshHandler}
            colors={['#5533EA']}
            tintColor={'#5533EA'}
          />
        }
        renderItem={({item}) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() =>
              onCatPress({
                image: item.image,
                name: item.name,
                description: item.description,
              })
            }>
            <Image source={{uri: item.image?.url}} style={styles.image} />
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
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    borderColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#5533EA',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
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
