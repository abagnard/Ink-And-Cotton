import { combineReducers } from 'redux';
import { SessionReducer } from './session_reducer';
import { ProductReducer } from './product_reducer';


export const MasterReducer = combineReducers({
  session: SessionReducer,
  products: ProductReducer
});
