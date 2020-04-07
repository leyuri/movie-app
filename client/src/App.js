import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage}>
          </Route>
          <Route path="/register" component={RegisterPage}>
          </Route>
          <Route path="/" component={LandingPage}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
