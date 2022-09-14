import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: {},
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
      state.currentUser = payload[0];
      state.error = '';
    },
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setUsers, setCurrentUser, setError } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
