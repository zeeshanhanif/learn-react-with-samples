import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux'

import { store } from './store'
import routes from './routes'

ReactDOM.render(
  <Provider store={store}>
    {{routes}}
  </Provider>,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <Provider store={store}>
    {{routes}}
  </Provider>,
  document.getElementById('root')
);
*/
