import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const IsUserRedirect = ({ children, user, redirectPath, ...rest }) => (
  <Route
    {...rest}
    render={() => {
      if (user) {
        return (
          <Redirect
            to={{
              pathname: redirectPath,
            }}
          />
        );
      }
      if (!user) {
        return children;
      }
    }}
  />
);

export const ProtectedRoute = ({ children, user, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (user) {
        return children;
      }
      if (!user) {
        return (
          <Redirect
            to={{
              pathname: 'signin',
              from: location,
            }}
          />
        );
      }
    }}
  />
);
