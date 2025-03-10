import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreContextProvider from './context/Storecontext.jsx';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component

createRoot(document.getElementById('root')).render(
  <Router>
    <StoreContextProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreContextProvider>
  </Router>
);
