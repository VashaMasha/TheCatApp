import {combineReducers} from 'redux';
import appReducer from './appReducer';

const combinedReducer = combineReducers({
  app: appReducer,
});

export default combinedReducer;
