import { configureStore } from '@reduxjs/toolkit';
import postSliceReducer from './posts';
import userSliceReducer from './users';

export const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    users: userSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
