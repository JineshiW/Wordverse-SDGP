// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Teachers from './pages/Teachers';
import Languages from './pages/Languages';
import Courses from './pages/Courses';
import Quizzes from './pages/Quizzes';
import Navbar  from './components/Navbar';


function App() {
  return (
   
    <Router>
      <div className="App">
       <div>
        <Navbar />
        </div>
        
        <div>
        <Sidebar />
       </div>

        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/quizzes" element={<Quizzes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;