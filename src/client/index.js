import 'react-hot-loader/patch';
import './assets/scss/base.scss';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App.jsx';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(App);
if (module.hot) module.hot.accept('./pages/App.jsx', () => {
  try {
    render(App)
  } catch (e) {
    location.reload();
  }
});
