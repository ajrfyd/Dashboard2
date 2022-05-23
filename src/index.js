import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.querySelector('#root');

ReactDom.createRoot(root).render(
  <App />
)