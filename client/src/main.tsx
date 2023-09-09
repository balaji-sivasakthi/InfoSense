import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './view/app'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './view/page/Home'
import Details from './view/app/Details'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/app/dashboard' Component={App}/>
            <Route path='/app/details/:id' Component={Details}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
