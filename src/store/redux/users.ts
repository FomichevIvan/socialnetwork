import { createSlice } from '@reduxjs/toolkit';
import { IReduxUserState } from '../../shared/interfaces/post';
import {
  registerUserAsync,
  signInUserAsync,
  signOutUserAsync,
} from './firebase';

const initialState: IReduxUserState = {
  user: null,
  error: '',
  message: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearErrors: state => {
      state.error = '';
      state.message = '';
    },

    signInAsCurrUser: (state, { payload }) => {
      state.user = payload;
      console.log(state.user, 'writing user');
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUserAsync.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.message = 'Success register!';
      // console.log(state.user, 'state.user');
      // localStorage.setItem('user', JSON.stringify(payload.uid));
    });

    builder.addCase(registerUserAsync.rejected, (state, { payload }: any) => {
      state.error = payload;
    });

    builder.addCase(signInUserAsync.fulfilled, (state, { payload }) => {
      state.user = payload;

      state.message = 'Success login!';
      // localStorage.setItem('user', JSON.stringify(payload.uid));
      // console.log(payload.uid);
    });

    builder.addCase(signInUserAsync.rejected, (state, { payload }: any) => {
      state.error = payload;
    });

    builder.addCase(signOutUserAsync.fulfilled, state => {
      state.user = null;
      console.log('aa');
    });
  },
});

export const { clearErrors, signInAsCurrUser } = userSlice.actions;

export default userSlice.reducer;
