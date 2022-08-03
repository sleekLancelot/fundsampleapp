import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './slices/user.slice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});