import React from 'react';

import { useAuth } from '../hook/AuthContext';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const {signed} = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;


