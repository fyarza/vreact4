import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import FUECList from './Pages/FUEC';
import FUECForm from './Pages/FUEC/Form';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/Profile-Edit';
import ProfileMobile from './Pages/ProfileMobile';
import Settings from './Pages/Settings';
import Uber from './Pages/Uber';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="about" element={<About />} />
      <Route path="fueclist" element={<FUECList />} />
      <Route path="fuecform" element={<FUECForm />} />
      <Route path="uber" element={<Uber />} />
      <Route path="settings" element={<Settings />} />
      <Route path="profilemobile" element={<ProfileMobile />} />
      <Route path="profileedit" element={<ProfileEdit />} />
    </Routes>
  );
}

export default App;
