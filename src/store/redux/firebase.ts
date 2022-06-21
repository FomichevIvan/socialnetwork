import { auth } from '../../index';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getDatabase, ref, set, update, child, get } from 'firebase/database';

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
      const { uid } = userCredential.user;
      const dbRef = ref(getDatabase());
      const response = await get(child(dbRef, `users/${uid}`));
      const userData = response.val();
      return JSON.parse(JSON.stringify(userData));
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
      const { uid } = userCredential.user;

      await set(ref(getDatabase(), `users/${uid}`), {
        email: email,
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/social-network-ivan.appspot.com/o/96c3bbca-054f-4bfc-9b66-c7f016f8c8ca?alt=media&token=6621a3cf-eee6-4167-b850-65d863b339e1',

        name: 'Anon',
        lastName: 'Well-Known',
        city: 'SomewhereBurg',
      });

      return {
        email: email,
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/social-network-ivan.appspot.com/o/96c3bbca-054f-4bfc-9b66-c7f016f8c8ca?alt=media&token=6621a3cf-eee6-4167-b850-65d863b339e1',

        name: 'Anon',
        lastName: 'Well-Known',
        city: 'SomewhereBurg',
      };
    } catch (error: any) {
      return rejectWithValue(error.message);
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

export const updateUserAsync = createAsyncThunk(
  'updateUser',
  async (updates: any, { rejectWithValue }) => {
    const uid = auth.currentUser?.uid;

    try {
      const db = getDatabase();
      const userRef = ref(db, `users/${uid}`);
      await update(userRef, updates);
      return updates;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
