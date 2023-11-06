// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import HistoryPage from './HistoryPage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/history" element={<HistoryPage />}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
