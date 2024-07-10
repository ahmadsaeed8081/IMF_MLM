import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/home';
import Header from './components/header';
import Footer from './components/footer';
import Tasks from './screens/tasks';
import FAQS from './screens/FAQs';

function App() {
  return (
    
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </div>
      
    
  );
}

export default App;
