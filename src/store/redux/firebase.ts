import { auth } from '../../index';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
      const nonSerialized = JSON.parse(JSON.stringify(user));
      return nonSerialized;
    } catch (error: any) {
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
      const nonSerialized = JSON.parse(JSON.stringify(user));
      return nonSerialized;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
