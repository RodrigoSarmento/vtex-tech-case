import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { lightTheme } from './themes/default';
import { ThemeProvider } from 'styled-components';
import { ApiProvider } from './contexts/Api';
import { ToastProvider } from './contexts/Toast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <ToastProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>
);
