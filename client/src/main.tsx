import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './view/app'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './view/app/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/app/dashboard' Component={App}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
