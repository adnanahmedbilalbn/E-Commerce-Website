  // reducers/menReducer.js
  const womenReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_WOMEN_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default womenReducer;
  