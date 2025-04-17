import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Github, Cpu } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;