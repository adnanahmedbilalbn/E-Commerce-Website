// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products';
import Navbar from './components/Navbar/Navbar';
import "../src/assets/css/style.css"
import MyPageInitialExpanded from './components/initial/InitialPage';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <MyPageInitialExpanded />
      </div>
    </Router>
  );
};

export default App;
