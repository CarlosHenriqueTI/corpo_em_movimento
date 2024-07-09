import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Agendamentos from './pages/Agendamentos.jsx';
import Depoimentos from './pages/Depoimentos.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/agendamento" element={<Agendamentos />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);