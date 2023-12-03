  // reducers/menReducer.js
  const sportsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SPORTS_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default sportsReducer;
  