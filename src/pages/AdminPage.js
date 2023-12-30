// AdminPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';


const AdminPage = () => {


  const navigate = useNavigate();

  return (
    <div className="admin-page">

    <div className="admin-container">
        <h3>Check Orders</h3>
        <i onClick={() => navigate('/checkOrders')} className="icon fas fa-list-alt"></i>
        {/* <button >Navigate</button> */}
      </div>

      <div className="admin-container">
        <h3>Add Product</h3>
        <i onClick={() => navigate('/addProduct')} className="icon fas fa-plus-circle"></i>
        {/* <button >Navigate</button> */}
      </div>

      <div className="admin-container">
        <h3>Add Feature Product</h3>
        <i onClick={() => navigate('/addFeatureProduct')} className="icon fas fa-star"></i>
        {/* <button >Navigate</button> */}
      </div>

    </div>
  );
};

export default AdminPage;
