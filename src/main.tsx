import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouterProvider from './core/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouterProvider />
  </React.StrictMode>,
)
