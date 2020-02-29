import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';

import './App.css';
import { AuthRoute } from './components/AuthRoute';

const App = () => {
  return (
    <Router>
      <>
        <h1>NYCC</h1>
        <Switch>
          <AuthRoute exact path='/' component={Dashboard} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
