import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';
import {toggle_app_loading} from '../store/actionCreators/appActionCreators';
import {useDispatch} from 'react-redux';
import ScreenWrapper from '../theme/ScreenWrapper';
import {getCats, addToFavorites} from '../api';

type OneCatScreenProps = {
  route: any;
};
const width = Dimensions.get('window').width - 40;

const OneCatScreen = ({route}: OneCatScreenProps) => {
  const dispatch = useDispatch();
  const {catItem} = route.params;
  const [cat, setCat] = useState(catItem);

  const showAnotherPressed = () => {
    dispatch(toggle_app_loading(true));
    getCats()
      .then((res: any) => {
        const randomCat = res[Math.floor(Math.random() * res.length)];
        setCat(randomCat);
      })
      .catch((err: any) => console.log(err))
      .finally(() => dispatch(toggle_app_loading(false)));
  };

  const addToFavoritesPressed = () => {
    dispatch(toggle_app_loading(true));
    addToFavorites({
      image_id: cat.image.id,
      sub_id: 'appUser12345',
    })
      .catch((err: any) => console.log(err))
      .finally(() => dispatch(toggle_app_loading(false)));
  };

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            onLoadStart={() => dispatch(toggle_app_loading(true))}
            onLoadEnd={() => dispatch(toggle_app_loading(false))}
            source={cat.image}
            style={styles.image}></Image>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.breedText}>{cat.name}</Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.descriptionText}>
            {cat.description}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={[styles.button, {marginRight: 20}]}
            onPress={showAnotherPressed}>
            <Text style={styles.buttonText}>Показать другую кошку</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={addToFavoritesPressed}>
            <Text style={styles.buttonText}>Добавить в избранное</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 16,
  },
  imageContainer: {
    marginVertical: 10,
    borderColor: 'white',
    borderRadius: 16,
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
  breedText: {
    fontSize: 16,
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
    marginBottom: 20,
  },
  button: {
    flex: 1,
    borderRadius: 12,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 12,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#5533EA',
    fontWeight: 'bold',
  },
});
export default OneCatScreen;
