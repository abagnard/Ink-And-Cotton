import { receiveSingleUser } from '../actions/user_actions';

export const fetchSingleUser = (user, success) => {

  $.ajax({
    url: `/api/users/${user.id}`,
    data: user,
    success
  });
};
