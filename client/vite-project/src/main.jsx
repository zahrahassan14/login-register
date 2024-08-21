import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'; // or './App.css' depending on where you added Tailwind directives


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
