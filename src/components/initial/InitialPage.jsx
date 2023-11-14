// MyPageInitialExpanded.js

import React from 'react';
import "./Initial.css"

const MyPageInitialExpanded = () => {
  const openSidebar = () => {
    document.getElementById('main').style.marginLeft = '25%';
    document.getElementById('mySidebar').style.width = '25%';
    document.getElementById('mySidebar').style.display = 'block';
  };

  const closeSidebar = () => {
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('mySidebar').style.display = 'none';
  };

  return (
    <div>
      {/* Sidebar with animation */}
      <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" id="mySidebar">
        <button onClick={closeSidebar} className="w3-bar-item w3-button w3-large">
          Close &times;
        </button>
        <a href="#" className="w3-bar-item w3-button">
          Link 1
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 2
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 3
        </a>
      </div>

      {/* Page Content */}
      <div id="main">
        <div className="w3-teal">
          <button onClick={openSidebar} className="w3-button w3-teal w3-xlarge">
            &#9776;
          </button>
          <div className="w3-container">
            <h1>My Page</h1>
          </div>
        </div>

        {/* Your page content goes here */}

      </div>
    </div>
  );
};

export default MyPageInitialExpanded;
