import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  details : {},

  isAuthenticated: false,
  loading: false,
};

export const UserSlice = createSlice( {
  name: 'user',
  initialState,
  reducers: {
    setProfile: ( state, action ) => {
      state.details = action.payload;
    },
    setAuthentication: ( state, action ) => {
      state.isAuthenticated = action.payload;
    },
  },
} )

export const { setProfile, setAuthentication } = UserSlice.actions;

export const UserReducer = UserSlice.reducer;