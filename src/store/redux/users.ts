import { createSlice } from '@reduxjs/toolkit';
import { IReduxUserState } from '../../shared/interfaces/post';
import { registerUserAsync, signInUserAsync } from './firebase';

const initialState: IReduxUserState = {
  user: null,
  isNew: true,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.isNew = action.payload;
    },

    clearErrors: state => {
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUserAsync.fulfilled, (state, { payload }) => {
      state.user = payload;
    });

    builder.addCase(registerUserAsync.rejected, (state, { payload }: any) => {
      state.error = payload;
    });

    builder.addCase(signInUserAsync.fulfilled, (state, { payload }) => {
      state.user = payload;
    });

    builder.addCase(signInUserAsync.rejected, (state, { payload }: any) => {
      state.error = payload;
    });
  },
});

export const { changeStatus, clearErrors } = userSlice.actions;

export default userSlice.reducer;
