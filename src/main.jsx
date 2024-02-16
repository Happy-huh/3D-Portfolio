import React from 'react'
import ReactDOM from 'react-dom/client'
import D3App from './3DApp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<D3App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
