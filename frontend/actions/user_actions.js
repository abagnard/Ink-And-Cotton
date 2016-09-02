export const UserConstants = {
  RECEIVE_SINGLE_USER: "RECEIVE_SINGLE_USER",
  FETCH_SINGLE_USER: "FETCH_SINGLE_USER"
};


export const fetchSingleUser = user => ({
  type: UserConstants.FETCH_SINGLE_USER,
  user
});

export const receiveSingleUser = currentUser => ({
  type: UserConstants.RECEIVE_SINGLE_USER,
  currentUser
});
