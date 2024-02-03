import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { lightTheme } from './themes/default';
import { ThemeProvider } from 'styled-components';
import { ApiProvider } from './contexts/Api';
import { ToastProvider } from './contexts/Toast';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <ApiProvider>
            <App />
          </ApiProvider>
        </QueryClientProvider>
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>
);
