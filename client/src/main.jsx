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
import { AppContextProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContextProvider>
  </BrowserRouter>,
)
