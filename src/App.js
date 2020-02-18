import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Login from './containers/login/Login';
import Timeline from './containers/timeline/Timeline';
import PrivateRoute from './components/privateRoute/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute path='/timeline' component={Timeline} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
