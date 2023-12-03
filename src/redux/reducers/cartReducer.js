  // reducers/cartReducer.js
  const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CART_DATA':
        console.log("CArt>>>.",action.payload)
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default cartReducer;