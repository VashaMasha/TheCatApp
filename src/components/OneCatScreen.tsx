import React from 'react';
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

type OneCatScreenProps = {
  route: any;
};
const width = Dimensions.get('window').width - 40;

const OneCatScreen = ({route}: OneCatScreenProps) => {
  const dispatch = useDispatch();
  const {catItem} = route.params;

  return (
    <ScreenWrapper showBackButton>
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
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
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
  },
  button: {
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
