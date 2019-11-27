import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import load from '@loadable/component';
import { hot } from 'react-hot-loader/root';
import configureStore from '../configureStore';
import './App.scss';

const store = configureStore();

store.dispatch({ type: 'INIT' });

const Home = load(() => import(/* webpackChunkName: "homepage" */ '../../modules/Home'));

const App = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={Home} store={store} />
      </Switch>
    </Provider>
  </Router>
);

export default hot(App);
