import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import combinedReducer from './reducers/combinedReducer';

const middlewares = [thunk];

const rootPersistConfig = {
  timeout: 0,
  key: 'root',
  whitelist: ['app'],
  storage: AsyncStorage,
};

const persistRootReducer = persistReducer(rootPersistConfig, combinedReducer);

export const store = createStore(
  persistRootReducer,
  applyMiddleware(...middlewares),
);
export const persistor = persistStore(store);
