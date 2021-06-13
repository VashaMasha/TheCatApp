import {combineReducers} from 'redux';
import appReducer from './appReducer';
import photoReducer from './photoReducer';

const combinedReducer = combineReducers({
  app: appReducer,
  photo: photoReducer,
});

export default combinedReducer;
