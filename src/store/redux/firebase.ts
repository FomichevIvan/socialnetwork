import { auth } from '../../index';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../shared/interfaces/post';

export const signInUserAsync = createAsyncThunk(
  'userSignIn',
  async function (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) {
    const { email, password } = credentials;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return JSON.parse(JSON.stringify(user));
    } catch (error: any) {
      // return rejectWithValue(JSON.parse(JSON.stringify(error)));
      return rejectWithValue(error.message);
    }
  }
);

export const registerUserAsync = createAsyncThunk(
  'userCreate',
  async function (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) {
    const { email, password } = credentials;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return JSON.parse(JSON.stringify(user));
    } catch (error: any) {
      // return rejectWithValue(JSON.parse(JSON.stringify(error)));
      return rejectWithValue(error.message); // оббработка ошибок на фронте??
    }
  }
);

export const signOutUserAsync = createAsyncThunk(
  'signOutUser',
  async (_, { rejectWithValue }) => {
    try {
      return await signOut(auth);
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// export const updateUserAsync = createAsyncThunk(
//     'updateUser',
//     async function (userProps: any, {rejectWithValue}) {
//         try {
//             updateProfile(auth,);
//         }
//     }
// );
