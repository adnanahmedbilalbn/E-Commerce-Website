import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Navbar from "./components/Common/Navbar"
import "../src/assets/css/style.css"
import Footer from './components/Common/Footer';
import LoginPage from './components/Login';
import Register from './components/Register';
import EcommerceWebsite from './pages/Products';



const App = () => {


  return (
    <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<EcommerceWebsite />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <Footer />
    </Router>
  );
};

export default App;
