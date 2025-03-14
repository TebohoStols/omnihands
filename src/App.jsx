import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Supplies from './components/Supplies';
import EssentialStationery from './components/EssentialStationery';
import CorporateBookings from './components/CorporateBookings';
import CorporateCatering from './components/CorporateCatering';
import OfficeCleaningServices from './components/OfficeCleaningServices';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/supplies" element={<Supplies />} />
      <Route path="/stationery" element={<EssentialStationery />} />
      <Route path="/corporate-bookings" element={<CorporateBookings />} />
      <Route path="/corporate-catering" element={<CorporateCatering />} />
      <Route path="/office-cleaning" element={<OfficeCleaningServices />} />
    </Routes>
  </BrowserRouter>
);

export default App;