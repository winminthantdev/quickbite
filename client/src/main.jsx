import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {Provider } from 'react-redux'
// import store from './store/store.js'
import './index.css'
import App from './App.jsx'
import './lib/fontawesome.js'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
