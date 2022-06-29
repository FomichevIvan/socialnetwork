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
          'https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg',

        name: 'Anon',
        lastName: 'Well-Known',
        city: 'SomewhereBurg',
      });

      return {
        email: email,
        avatar:
          'https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg',

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
