import { combineReducers } from 'redux';
import { SessionReducer } from './session_reducer';


export const MasterReducer = combineReducers({
  session: SessionReducer,
});
