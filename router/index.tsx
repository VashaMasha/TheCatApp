import React from 'react';
import {MainStackNavigator} from '../router/MainStackNavigator';

const Router = () => {
  return <MainStackNavigator />;
};

export const navigationRef: any = React.createRef();

export function navigate(name: any, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export default Router;
