import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Navbar from "./components/Common/Navbar"
import "../src/assets/css/style.css"
import Footer from './components/Common/Footer';
import LoginPage from './components/Login';
import Register from './components/Register';
import EcommerceWebsite from './pages/Products';
import MenProducts from './pages/products/Men';
import WomenProducts from './pages/products/Women';
import SportsProducts from './pages/products/Sports';
import ElectronicProduct from './pages/products/electronics';
import Cart from './pages/Cart';
import SearchPage from './pages/SearchPage';



const App = () => {


  return (
    <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<EcommerceWebsite />} />
            <Route path='/products/men' element={<MenProducts />} />
            <Route path='/products/women' element={<WomenProducts />} />
            <Route path='/products/electronics' element={<ElectronicProduct />} />
            <Route path='/products/sports' element={<SportsProducts />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/searchPage' element={<SearchPage />} />
          </Routes>
          <Footer />
    </Router>
  );
};

export default App;
