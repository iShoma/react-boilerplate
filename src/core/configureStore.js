import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const staticReducers = {
  test: (state = {}) => state,
};

const createReducer = asyncReducers => combineReducers({
  ...staticReducers,
  ...asyncReducers,
});

const middlewares = [applyMiddleware(thunk)];
let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-underscore-dangle
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middlewares.push(applyMiddleware(logger));
}

export default function configureStore(initialState = {}) {
  const store = createStore(createReducer(), initialState, composeEnhancers(
    ...middlewares,
  ));

  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}
