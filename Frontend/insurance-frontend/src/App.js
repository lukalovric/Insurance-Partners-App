import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PartnerList from './components/PartnerList';
import AddPartner from './components/AddPartner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PartnerList />} />
        <Route path="/add-partner" element={<AddPartner />} />
      </Routes>
    </Router>
  );
}

export default App;
