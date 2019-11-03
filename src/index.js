import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import App from './App';
import Contact from './pages/Contact';
import NotFound from './pages/404';

import './index.css';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
