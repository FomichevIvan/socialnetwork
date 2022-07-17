import { createSlice } from '@reduxjs/toolkit';
import { IReduxUserState } from '../../shared/interfaces/interfaces';
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
  loading: true,
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
      state.loading = false;
    },

    showLoading: (state, { payload }) => {
      state.loading = payload;
    },

    showWarning: (state, { payload }) => {
      state.message = { type: 'warning', message: payload };
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUserAsync.fulfilled, (state, { payload }: any) => {
      state.user = payload;
      state.message = { type: 'success', message: 'Success register!' };
    });

    builder.addCase(registerUserAsync.rejected, (state, { payload }: any) => {
      console.log(payload, 'cancelled register payload');
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

    builder.addCase(updateUserAsync.fulfilled, (state, { payload }: any) => {
      state.user = { ...state.user, ...payload };
      state.loading = false;
    });

    builder.addCase(updateUserAsync.rejected, (state, { payload }: any) => {
      state.message = { type: 'error', message: payload };
    });

    // builder.addCase(signInAndGetData.fulfilled, (state, { payload }: any) => {
    //   console.log(payload, 'payload in fulf');
    // });
  },
});

export const { clearErrors, signInAsCurrUser, showLoading, showWarning } =
  userSlice.actions;

export default userSlice.reducer;
