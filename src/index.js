import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './views/Login/Login';
import Navbar from './components/navbar/Navbar';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const isLoggedIn = false;

const authenticatedRoutes = (
  <>
  <Navbar />
  <div className="container pt-4">
    <Router>
      <Switch>
        <Route path="/">
          <h1>Logged in</h1>
        </Route>
      </Switch>
    </Router>
  </div>
  </>
);

const unauthenticatedRoutes = (
  <>
  <Navbar />
  <div className="container pt-4">
    <Login />
  </div>
  </>
);

ReactDOM.render((isLoggedIn ? authenticatedRoutes : unauthenticatedRoutes),document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
