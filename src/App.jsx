import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import BookingDetails from './Pages/BookingDetailsMobile';
import FUECList from './Pages/FUEC';
import FUECForm from './Pages/FUEC/Form';
import History from './Pages/History';
import HistoryDetailsMobile from './Pages/HistoryDetailsMobile';
import Home from './Pages/Home';
import HomeOnline from './Pages/HomeOnline';
import NotificationsMobile from './Pages/NotificationsMobile';
import PaymentMethodMobile from './Pages/PaymentMethodMobile';
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
      <Route path="history" element={<History />} />
      <Route path="history-details" element={<HistoryDetailsMobile />} />
      <Route path="homeonline" element={<HomeOnline />} />
      <Route path="booking-details" element={<BookingDetails />} />
      <Route path="paymentmethod" element={<PaymentMethodMobile />} />
      <Route path="notifications" element={<NotificationsMobile />} />
    </Routes>
  );
}

export default App;
