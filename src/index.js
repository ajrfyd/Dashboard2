import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';

const root = document.querySelector('#root');

ReactDom.createRoot(root).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)