import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { Provider } from 'react-redux';
import { store } from './store/redux';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
  apiKey: 'AIzaSyBrs3AbXerdFw6PpXbaOUEI7qZMXZHN4lg',
  authDomain: 'social-network-ivan.firebaseapp.com',
  projectId: 'social-network-ivan',
  storageBucket: 'social-network-ivan.appspot.com',
  messagingSenderId: '1035850542761',
  appId: '1:1035850542761:web:adcbc894483abb2b28c3b8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
