import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const checkAuth = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  return true;
};

export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? <Component {...props} /> : <Redirect to='/login' />
    }
  />
);
