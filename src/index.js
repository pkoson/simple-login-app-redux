// @flow
import React from 'react';
import { render } from 'react-dom';

import App from './App';

import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

render(<App />, document.getElementById('root'));
