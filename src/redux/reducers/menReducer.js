  // reducers/menReducer.js
  const menReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MEN_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default menReducer;
  