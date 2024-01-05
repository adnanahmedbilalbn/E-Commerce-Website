// reducers/cartReducer.js
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CART_DATA':
      console.log("Cart -->>>.", action.payload);
      return [...state, action.payload];

    case 'REMOVE_CART_ITEM':
      // Assuming action.payload contains the index or unique identifier of the item to be removed
      const titleToRemove = action.payload;
      // return state.filter((item, index) => index !== itemIndexToRemove);
      return state.filter(item => item.title !== titleToRemove);

    default:
      return state;
  }
};

export default cartReducer;
