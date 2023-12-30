// reducers/index.js
import { combineReducers } from 'redux';
import menReducer from './menReducer';
import womenReducer from './womenReducer';
import sportsReducer from './sportsReducer';
import electronicsReducer from './electronicsReducer';
import cartReducer from './cartReducer';
import searchReducer from './searchReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
  men: menReducer,
  women: womenReducer,
  sports: sportsReducer,
  electronics: electronicsReducer,
  cartItems: cartReducer,
  searchItem:searchReducer,
  buyingItem:itemReducer
});

export default rootReducer;
