import React from 'react';
import { useSelector } from 'react-redux';
import createLinkedList from '../DSAFunctions/LinkedList'; 
import ProductSection from '../components/ProductSection/ProductSection';
// import CartCard from '../components/Card/CartCard';



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

      {linkedList.isEmpty() ? (
        <p>Your cart is empty.</p>
      ) : (
        <>

        <ProductSection heading={"Cart"} product={linkedList.toArray()} isCart />
        {/* <CartCard product={linkedList.toArray()}  /> */}

        </>
      )}

    </div>
  );
};

export default Cart;
