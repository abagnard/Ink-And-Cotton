export const UserConstants = {
  RECEIVE_SINGLE_USER: "RECEIVE_SINGLE_USER",
  FETCH_SINGLE_USER: "FETCH_SINGLE_USER"
};


export const fetchSingleUser = id => ({
  type: UserConstants.FETCH_SINGLE_USER,
  id
});

export const receiveSingleUser = user => ({
  type: UserConstants.RECEIVE_SINGLE_USER,
  user
});
