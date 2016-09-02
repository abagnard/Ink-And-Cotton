import merge from 'lodash/merge';
import { UserConstants } from '../actions/user_actions';

export const UserReducer = function(state = {}, action){
  switch(action.type) {
    case UserConstants.RECEIVE_SINGLE_PRODUCT:
      const newUser = {[action.user.id]: action.user};
      return Object.assign({}, state, newUser);
    default:
      return state;
  }
};
