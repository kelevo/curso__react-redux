import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './css/index.css';
import './css/iconos.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

// Creamos un store (almacenamiento para proveer a toda la app)
const store = createStore(
  // Parametros
  reducers, // 1-> Todos los reduces de mi aplicacion
  {}, // 2-> Estado inicial
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  // Provider da el almacenamiento
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

