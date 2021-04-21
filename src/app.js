import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          redirectPath={ROUTES.BROWSE}
          exact
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          redirectPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          redirectPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} exact>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
