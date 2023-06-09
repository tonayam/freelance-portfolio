import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/context';
// SPLITTING
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
