import {TOGGLE_APP_LOADING} from '../constants';

const initialState = {
  isLoading: false,
};

const appReducer = (app = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    case TOGGLE_APP_LOADING:
      return {
        ...app,
        isLoading:
          action.payload === undefined ? !app.isLoading : action.payload,
      };
    default:
      return app;
  }
};

export default appReducer;
