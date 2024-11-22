import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalNav from './components/Global/GlobalNav';
import GlobalPage from './pages/GlobalPage';
import MnPage from './pages/MnPage';

const App = () => {
  return (
    <Router>
      <div className="bg-slate-950 text-white">
        {/* Global Navbar will be present on all pages */}
        <GlobalNav />
        
        <div className="p-4">
          <Routes>
            <Route path="/" element={<GlobalPage />} /> 
            <Route path="/mn" element={<MnPage />} /> 
            <Route path="/mn/*" element={<MnPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
