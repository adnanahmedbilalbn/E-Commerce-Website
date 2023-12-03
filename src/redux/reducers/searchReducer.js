  // reducers/searchReducer.js
  const searchReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SEARCH_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default searchReducer;