import { createSlice } from '@reduxjs/toolkit';
import { IReduxUserState } from '../../shared/interfaces/post';
import {
  // signInAndGetData,
  registerUserAsync,
  signInUserAsync,
  signOutUserAsync,
  updateUserAsync,
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
    builder.addCase(registerUserAsync.fulfilled, (state, { payload }: any) => {
      console.log(payload, 'registerUserAsync payload');
      state.user = payload;
      state.message = { type: 'success', message: 'Success register!' };
    });

    builder.addCase(registerUserAsync.rejected, (state, { payload }: any) => {
      console.log(payload, 'cancelled register payload');
      state.message = { type: 'error', message: payload };
    });

    builder.addCase(signInUserAsync.fulfilled, (state, { payload }) => {
      console.log(payload, 'signInUserAsync payload');
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

    builder.addCase(updateUserAsync.fulfilled, (state, { payload }: any) => {
      console.log(payload, 'userUpd'); // приходит андефайнд, хоть и успех
    });

    builder.addCase(updateUserAsync.rejected, (state, { payload }: any) => {
      console.log(payload, 'error');
      state.message = { type: 'error', message: payload };
    });

    // builder.addCase(signInAndGetData.fulfilled, (state, { payload }: any) => {
    //   console.log(payload, 'payload in fulf');
    // });
  },
});

export const { clearErrors, signInAsCurrUser } = userSlice.actions;

export default userSlice.reducer;
