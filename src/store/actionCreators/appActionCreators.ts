import {TOGGLE_APP_LOADING, ADD_TO_FAVORITES} from '../constants';

export const toggle_app_loading = (isLoading?: boolean) => ({
  type: TOGGLE_APP_LOADING,
  payload: isLoading,
});

export const add_to_favorites = (photoToAdd: any) => ({
  type: ADD_TO_FAVORITES,
  payload: photoToAdd,
});
