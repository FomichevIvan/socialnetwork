import { auth } from '../../index';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getDatabase,
  ref,
  onValue,
  set,
  update,
  child,
  get,
} from 'firebase/database';
import { signInAsCurrUser } from './users';

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
      // *** можно ли не добавлять трайкетч во внутренних евейтах, все равно же поймается ошибка?

      const dbRef = ref(getDatabase());
      let res;

      const userInDB = await get(child(dbRef, `users/${uid}`));

      if (userInDB.exists()) {
        res = userInDB.val();
      } else {
        res = await set(ref(getDatabase(), `users/${uid}`), {
          name: 'Ivan',
        });
      }

      return JSON.parse(JSON.stringify(res));
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
        // имитация ошибки БД :  set(ref(getDatabase(undefined, 'll')...
        email: email,
        avatar: 'pic',
      });

      return {
        // можем ли мы передавать в фулфилд заглушку, так как функция сет возвращает андефайнд и нам нечего
        // положить в редакс. Это не проблема, ведь в случае ошибки в БД или АУС этот ретерн даже не срабатывает
        email: email,
        avatar: 'pic',
      };
    } catch (error: any) {
      console.log('catch in register!!!!');
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
      return updates; // либо я неправильно получаю резльтат апдейт, либо он срабатывает раньше, чем получаем
      // данные, но я в фуллфилд передаю постоянно андефайнд, если делаю return await update(userRef, userProps);
    } catch (e: any) {
      console.dir(e, 'hi');
      return rejectWithValue(e.message); // почему не могу залогать ошибку из кетч?, не могу передать ее в реджектед,
      // чтобы
      // отобразить в Тоаст?
    }
  }
);
