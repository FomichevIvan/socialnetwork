import { createSlice } from '@reduxjs/toolkit';
import { IReduxUserState } from '../../shared/interfaces/post';
import {
  registerUserAsync,
  signInUserAsync,
  signOutUserAsync,
} from './firebase';

const initialState: IReduxUserState = {
  user: null,
  message: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearErrors: state => {
      state.message = null;
    },

    signInAsCurrUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUserAsync.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.message = { type: 'success', message: 'Success register!' };
    });

    builder.addCase(registerUserAsync.rejected, (state, { payload }: any) => {
      state.message = { type: 'error', message: payload };
    });

    builder.addCase(signInUserAsync.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.message = { type: 'success', message: 'Success login!' };
    });

    builder.addCase(signInUserAsync.rejected, (state, { payload }: any) => {
      state.message = { type: 'error', message: payload };
    });

    builder.addCase(signOutUserAsync.fulfilled, state => {
      state.user = null;
    });

    builder.addCase(signOutUserAsync.rejected, (state, { payload }: any) => {
      state.message = { type: 'error', message: payload };
    });
  },
});

export const { clearErrors, signInAsCurrUser } = userSlice.actions;

export default userSlice.reducer;
