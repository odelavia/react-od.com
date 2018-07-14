import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
// import App from './components/App';
import AppRoutes from './routing/AppRoutes';
import './styles/main.scss';

ReactDOM.render(
  <AppContainer>
      <AppRoutes />
  </AppContainer>,
  document.getElementById('root'),
);

// Webpack Hot Module Replacement
if (module.hot) {
  module.hot.accept('./routing/AppRoutes', () => {
    ReactDOM.render(
      <AppContainer>
          <AppRoutes />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
