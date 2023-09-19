import React from 'react';
import { createRoot } from 'react-dom';
import App from './components/App.jsx'

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById('root');
  const app = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  if (root) {
    createRoot(root).render(app);
  }
});
