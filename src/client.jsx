import React from 'react';
import { render } from 'react-dom';
import AppContainer from './core/containers/App';

const appRoot = document.getElementById('app');

render(<AppContainer />, appRoot);
