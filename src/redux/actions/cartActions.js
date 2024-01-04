// actions/cartActions.js
export const setCartData = (data) => ({
    type: 'SET_CART_DATA', 
    payload: data,
  });

  export const removeCartItem = (itemIndex) => ({
    type: 'REMOVE_CART_ITEM',
    payload: itemIndex,
  });