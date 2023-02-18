import React from 'react';
import ReactDOM from 'react-dom/client';
import ModalContextProvider from 'context/ModalContext';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>
);
