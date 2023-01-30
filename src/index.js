import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import Error404 from './models/Error404.js';
import Categories from './models/Categories';

const navigation = (
  <Router>
    <ul>
      <li>
        <NavLink to="/">Main</NavLink>
      </li>
      <li>
        <NavLink to="/people">Characters</NavLink>
      </li>
      <li>
        <NavLink to="/films">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/planets">Planets</NavLink>
      </li>
      <li>
        <NavLink to="/starships">Starships</NavLink>
      </li>
      <li>
        <NavLink to="/vehicles">Vehicles</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:category_name" component={Categories} />
      <Route component={Error404} />
    </Switch>
  </Router>
)

ReactDOM.render(
  navigation,
  document.getElementById('root')
);