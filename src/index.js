import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar/Navbar';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthService from './services/AuthService';

// Views
import Login from './views/Login/Login';
import TodaysOrders from './views/TodaysOrders/TodaysOrders';

const authenticatedRoutes = (
  <>
  <Navbar />
  <div className="pl-4 pr-4 pt-4 pb-4">
    <Router>
      <Switch>
        <Route path="/">
          <TodaysOrders />
        </Route>
      </Switch>
    </Router>
  </div>
  </>
);

const unauthenticatedRoutes = (
  <>
  <Navbar />
  <div className="pl-4 pr-4 pt-4 pb-4">
    <Login />
  </div>
  </>
);

const authService = new AuthService();

authService.isAuthenticated().then( isAuthenticated => {
  ReactDOM.render((isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes), document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
