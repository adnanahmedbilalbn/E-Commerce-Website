  // reducers/cartReducer.js
  const productReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PRODUCT_DATA':
        console.log("Product-->>>.",action.payload)
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default productReducer;