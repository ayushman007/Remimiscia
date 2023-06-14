import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {legacy_createStore as createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

import App from './App';

import './index.css';


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
    document.getElementById('root')
  );