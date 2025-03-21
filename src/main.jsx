import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.scss'
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <App />
    
  </React.StrictMode>
)