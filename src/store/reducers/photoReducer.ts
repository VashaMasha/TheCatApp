import {ADD_TO_FAVORITES} from '../constants';

const initialState = {
  favorites: [],
};

const photoReducer = (app = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      let res = app.favorites.concat(action.payload);
      app.favorites.map((item: any) => {
        if (item.url === action.payload.url) {
          res = app.favorites;
        }
      });
      return {
        ...app,
        favorites: res,
      };
    default:
      return app;
  }
};

export default photoReducer;
