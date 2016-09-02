import { fetchSingleUser } from '../util/user_api_util';
import { UserConstants, receiveSingleUser } from '../actions/user_actions';


export const UserMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveSingleUser(user));

  switch (action.type) {
    case UserConstants.FETCH_SINGLE_USER:
      fetchSingleUser(action.user, successCallback);
      return next(action);
    default:
      return next(action);
    }
};
