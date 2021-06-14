import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Dimensions,
  RefreshControl,
} from 'react-native';
import ScreenWrapper from '../theme/ScreenWrapper';
import {toggle_app_loading} from '../store/actionCreators/appActionCreators';
import {useDispatch} from 'react-redux';
import {getFavourites} from '../api';

const width = Dimensions.get('window').width - 40;

const FavouritesScreen = () => {
  const [favourites, setFavourites] = useState([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(toggle_app_loading(true));
    getFavourites({
      sub_id: 'appUser12345',
      limit: 100,
      page: 1,
    })
      .then((res: any) => setFavourites(res))
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
        data={favourites}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshHandler}
            colors={'#5533EA'}
            tintColor={'#5533EA'}
          />
        }
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
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
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    height: width,
    width: width,
    borderRadius: 16,
  },
});

export default FavouritesScreen;
