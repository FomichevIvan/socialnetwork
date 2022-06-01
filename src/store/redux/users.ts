import { createSlice } from '@reduxjs/toolkit';
import { IReduxState, IReduxUserState } from '../../shared/interfaces/post';

const initialState: IReduxUserState = {
  user: { displayName: '', email: '', password: '' },
  show: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
