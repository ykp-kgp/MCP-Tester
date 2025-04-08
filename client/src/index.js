import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);  // ✅ This is the new way
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
