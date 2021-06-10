import {TOGGLE_APP_LOADING} from '../constants';

export const toggle_app_loading = (isLoading?: boolean) => ({
  type: TOGGLE_APP_LOADING,
  payload: isLoading,
});
