import React from 'react';
import { useSelector } from 'react-redux';

const OrderCheck = () => {
  const buyItems = useSelector((state) => state?.buyingItem);
  console.log(buyItems);

  return (
    <div>
      <div>
        <h1>New Orders</h1>
      </div>
      {buyItems?.map((item) => (
        <p key={item.id}>{item?.title}</p>
      ))}
    </div>
  );
};

export default OrderCheck;
