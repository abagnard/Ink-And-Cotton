import { combineReducers } from 'redux';
import { SessionReducer } from './session_reducer';
import { ProductReducer } from './product_reducer';
import { UserReducer } from './user_reducer';
import { CartItemReducer } from './cart_item_reducer';


export const MasterReducer = combineReducers({
  session: SessionReducer,
  products: ProductReducer,
  users: UserReducer,
  cartItems: CartItemReducer
});
