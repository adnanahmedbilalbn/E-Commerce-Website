// import React from 'react';
// import { useSelector } from 'react-redux';

// const Cart = () => {
//   const cartItems = useSelector((state) => state?.cartItems);
//   console.log(cartItems)
//   return (
//     <div className=' cart container text-align-center d-flex'>
//       <div className='row'>

// {cartItems?.map((item, index) => (
// //  <div>
// //   <h1>{item?.category}</h1>
// //   <p>{item?.title}</p>
// //   <p>{item?.price}</p>
// //   </ div>
// <div className="product-card col-3">
// <img src={item?.image} alt={item?.title} />

// <div className="product-details">
//   <span className="category">{item?.category}</span>
//   <h3 className="title">{item?.title}</h3>
//   <p className="price">${item?.price}</p>
//   <div className="rating">
//     {Array.from({ length: item?.rating }).map((_, index) => (
//       <span key={index} role="img" aria-label="star">
//         ⭐
//       </span>
//     ))}
//   </div>
// </div>
// </div>
// ))}


// </div>
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import { useSelector } from 'react-redux';
import createLinkedList from '../DSAFunctions/LinkedList'; 

const Cart = () => {
  const cartItems = useSelector((state) => state?.cartItems);
  const linkedList = createLinkedList();
  const products = linkedList.toArray()
  React.useEffect(() => {
    if (cartItems) {
      cartItems.forEach((item) => {
        linkedList.addToEnd(item);
      });
    }
  }, [cartItems, linkedList]);

  linkedList.printList()
  const handleRemoveItem = (item) => {
    linkedList.deleteItem(item);
  };
  console.log(linkedList)
  console.log(linkedList?.head)
  return (
    <div>
      <h2>Your Cart</h2>
      {linkedList.isEmpty() ? (
        <p>Your cart is empty.{linkedList.printList()}</p>
        
      ) : (
        <>
          {linkedList.toArray().map((cartItem, index) => (
            <div key={index}>
              <h1>{cartItem.category}</h1>
              <p>{cartItem.title}</p>
              <p>{cartItem.price}</p>
              <button onClick={() => handleRemoveItem(cartItem)}>
                Remove
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
