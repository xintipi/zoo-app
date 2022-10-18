import './locales/i18n';
import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import stores from './stores';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={stores}>
    <App />
  </Provider>
);
