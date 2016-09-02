import { receiveSingleUser } from '../actions/user_actions';

export const fetchSingleUser = (id, success) => {

  $.ajax({
    url: `/api/users/${id}`,
    success
  });
};
