import App from './App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/reset.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);