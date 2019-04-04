import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import load from '@loadable/component';
import { injectReducerToProps } from '../helpers';
import configureStore from '../configureStore';

const store = configureStore();
store.dispatch({ type: 'INIT' });

const inject = injectReducerToProps(store.injectReducer);

const Home = inject(load(() => import(/* webpackChunkName: "homepage" */ '../../modules/Home')));

const App = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={Home} store={store} />
      </Switch>
    </Provider>
  </Router>
);

const AppPatched = (process.env.NODE_ENV === 'production') ? App : hot(App);
export default AppPatched;
