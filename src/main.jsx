import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/petugas.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pengumuman from './pages/pengumuman.jsx'
import InsertDUKM from './pages/DUKM.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pengumuman" element={<Pengumuman />} />
      <Route path="/petugas" element={<App />} />
      <Route path="/DUKM" element={<InsertDUKM />} />
    </Routes>
  </Router>
)