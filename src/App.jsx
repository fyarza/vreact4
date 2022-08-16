import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
