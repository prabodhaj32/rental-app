import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Vehicles from '../pages/Vehicles';
import Booking from '../pages/Booking';
import Login from '../pages/Login';
import Register from '../pages/Register';
 import FleetSection from '../components/vehicle/FleetSection';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/FleetSection" element={<FleetSection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
