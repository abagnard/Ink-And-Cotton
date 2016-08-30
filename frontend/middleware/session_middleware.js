import { signup, login, logout } from '../util/session_api_util';
import { SessionConstants, receiveCurrentUser, receiveErrors } from '../actions/session_actions';


export const SessoinMiddleware = state => next => action => {
  const successCallback = user => state.dispatch(receiveCurrentUser(user));
  const errorCallback = errors => state.dispatch(receiveErrors(errors));
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
