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
      // *** можно ли не добавлять трайкетч во внутренних евейтах, все равно же поймается ошибка

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
      const { uid } = userCredential.user;

      await set(ref(getDatabase(), `users/${uid}`), {
        // имитация ошибки БД :  set(ref(getDatabase(undefined, 'll')...
        email: email,
        avatar: 'pic',
      });

      return {
        // можем ли мы передавать в фулфилд заглушку, так как функция сет возвращает андефайнд и нам нечего
        // положить в редакс. В случае ошибки в БД или АУС этот ретерн даже не срабатывает
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

// export const signInAndGetData = createAsyncThunk(
//   'readUser',
//   async (uid: string, { rejectWithValue }) => {
//     try {
//       const db = getDatabase();
//       const userRef = ref(db, 'users/' + uid);
//       await onValue(userRef, snapshot => {
//         const data = snapshot.val();
//         return data;
//       });
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );

export const updateUserAsync = createAsyncThunk(
  'updateUser',
  async (userProps: any, { rejectWithValue }) => {
    const uid = auth.currentUser?.uid;
    const db = getDatabase();

    const userRef = ref(db, `users/${uid}`);

    try {
      console.log('update');
      await update(userRef, userProps);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
