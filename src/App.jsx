import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Products from './pages/Products';
import Navbar from "./components/Common/Navbar"
import "../src/assets/css/style.css"
// import MyPageInitialExpanded from './components/Common/initial/InitialPage';
import Contact from './pages/Contact';
import Footer from './components/Common/Footer';
import LoginPage from './components/Login';
import Register from './components/Register';



const App = () => {
  return (
    <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />

          </Routes>
          {/* <MyPageInitialExpanded /> */}
          <Footer />
    </Router>
  );
};

export default App;
