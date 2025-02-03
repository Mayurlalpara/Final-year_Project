/* eslint-disable no-unused-vars */
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/Storecontext.jsx'


createRoot(document.getElementById('root')).render(
  <browserRouter>
  <StoreContextProvider>
  <App />
  </StoreContextProvider>
  </browserRouter>
  
)
