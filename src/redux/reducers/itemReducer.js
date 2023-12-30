  // itemReducer.js
  const itemReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ITEM_DATA':
        console.log("ITEM-->>>.",action.payload)
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default itemReducer;