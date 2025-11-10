import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<App/>} />
        <Route path = "/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
