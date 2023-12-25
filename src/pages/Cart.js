import React from 'react';
import { useSelector } from 'react-redux';
import createLinkedList from '../DSAFunctions/LinkedList'; 
import ProductSection from '../components/ProductSection/ProductSection';

const Cart = () => {
  const cartItems = useSelector((state) => state?.cartItems);
  const [linkedList, setLinkedList] = React.useState(createLinkedList());

  React.useEffect(() => {
    const updatedList = createLinkedList(); // Create a new instance on every update
    if (cartItems) {
      cartItems.forEach((item) => {
        updatedList.addToEnd(item);
      });
    }
    setLinkedList(updatedList); // Update the linked list state
  }, [cartItems]);

  const handleRemoveItem = (item) => {
    linkedList.deleteItem(item);
    setLinkedList(linkedList); // Force re-render after modification
  };

  console.log(linkedList)

  return (
    <div>
      <h2>Your Cart</h2>
      {linkedList.isEmpty() ? (
        <p>Your cart is empty.</p>
      ) : (
        <>

        <ProductSection heading={"Cart"} product={linkedList.toArray()} />

           {/* {linkedList.toArray().map((cartItem, index) => ( */}
        {/* //     <div key={index}>
        //       <h1>{cartItem.category}</h1>
        //       <p>{cartItem.title}</p>
        //       <p>{cartItem.price}</p>
        //       <button onClick={() => handleRemoveItem(cartItem)}>
        //         Remove
        //       </button>
        //     </div> */}
        {/* //   ))} */}
        </>
      )}
    </div>
  );
};

export default Cart;
