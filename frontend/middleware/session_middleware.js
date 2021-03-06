import { signup, login, logout } from '../util/session_api_util';
import { SessionConstants, receiveCurrentUser, receiveErrors } from '../actions/session_actions';


export const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  
  switch (action.type) {
    case SessionConstants.SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    default:
      return next(action);
  }
};
