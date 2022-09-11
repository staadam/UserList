export const actionNames = {
  SET_USERS: 'SET_USERS',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_ERROR: 'SET_ERROR',
};

export const createReducerActions = (dispatch) => ({
  [actionNames.SET_USERS]: (payload) => {
    dispatch((prevState) => ({ ...prevState, users: payload, currentUser: payload[0], error: '' }));
  },
  [actionNames.SET_CURRENT_USER]: (payload) => {
    dispatch((prevState) => ({ ...prevState, currentUser: payload }));
  },
  [actionNames.SET_ERROR]: (payload) => {
    dispatch((prevState) => ({ ...prevState, error: payload }));
  },
});
