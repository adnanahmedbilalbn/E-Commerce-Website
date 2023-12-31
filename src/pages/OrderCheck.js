// import React from 'react';
// import { useSelector } from 'react-redux';

// const OrderCheck = () => {
//   const buyItems = useSelector((state) => state?.buyingItem);
//   console.log(buyItems);

//   return (
//     <div>
//       <div>
//         <h1>New Orders</h1>
//       </div>
//       {buyItems?.map((item,index) => (
//         <p key={item.index}>{item?.title}</p>
//       ))}
//     </div>
//   );
// };

// export default OrderCheck;


// OrderCheck.js
import React from 'react';
import { useSelector } from 'react-redux';

const OrderCheck = () => {
  const buyItems = useSelector((state) => state?.buyingItem);
  console.log(buyItems,"itemssss>>>>>>")

  return (
    <div className="order-check-container">
      <div className="header">
        <h1>New Orders</h1>
      </div>
      {buyItems?.map((item, index) => (
        <div className="order-item" key={index}>
          <div className="product-info">
            <img src={item?.product?.image} alt={item?.product?.title} />
            <div>
              <h3>{item.product.title}</h3>
              <p>Price: ${item?.product.price}</p>
            </div>
          </div>
          <div className="customer-info">
            <h3>Customer Details</h3>
            <p>Name: {item.customer.name}</p>
            <p>Email: {item.customer.email}</p>
            <p>Phone: {item.customer.number}</p>
            <p>Address: {item.customer.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderCheck;
