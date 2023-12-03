  // reducers/menReducer.js
  const electronicReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ELECTRNIC_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default electronicReducer;