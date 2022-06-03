import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost, IReduxState } from '../../shared/interfaces/post';
import { getUrl } from '../../shared/utils/endpoints';

const initialState: IReduxState = {
  posts: [],
  show: false,
  curPost: { id: null, userId: null, title: '', body: '' }, //????
};

export const loadAllPosts = createAsyncThunk(
  'loadAll',
  async function (_, { rejectWithValue }) {
    const response = await fetch(getUrl('posts'));
    console.log('loading!');
    const result = await response.json();
    return result ? result.posts : rejectWithValue('sorry, no post!((('); // почему приходит в виде объекта с ключом
    // posts??
  }
);

export const createNewPost = createAsyncThunk(
  'createNew',
  async function (data: IPost, { rejectWithValue }) {
    const postParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(getUrl('posts'), postParams);
    const result = await response.json();
    return result
      ? result.post
      : rejectWithValue('did not created the post!((');
  }
);

export const deletePostAsync = createAsyncThunk(
  'deletePost',
  async function (id: string, { rejectWithValue }) {
    const deleteParams = {
      method: 'DELETE',
    };
    const response = await fetch(getUrl('posts') + '/' + id, deleteParams);
    return response.status === 200
      ? id
      : rejectWithValue('did not delete the post!((');
  }
);

export const editPostAsync = createAsyncThunk(
  'editPost',
  async function (data: IPost, { rejectWithValue }) {
    const editParams = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(getUrl('posts'), editParams);
    const result = await response.json();
    return result ? result.post : rejectWithValue('no edit!');
  }
);

// создание поста
// // заполнить поля - сформировать объект - отправить асинхр.запрос пост на бэк - получить ответ и обработать - в
// // экстраредюсере положить его в массив постов в стейте !!!! проверить бэк!!

//same logic, but update findIndex in extraReducer

//delete filter

//store экспорт санки лоад олл пост и в экстра обработка реджектед: записать в стейт (новый стейт!!!) сообщения для
// пользователя. Добавить тост или алерт об этом

//firebase ??

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changeFlag: (state, action) => {
      state.show = action.payload;
    },

    setCurPost: (state, action) => {
      state.curPost = action.payload;
    },

    saveEditedPost: (state, action) => {
      state.posts = state.posts.map((el: IPost) => {
        if (el.id === action.payload.id) {
          return (el = action.payload);
        } else return el;
      });
      state.curPost = { id: null, userId: null, title: '', body: '' };
    },
  },
  extraReducers: builder => {
    builder.addCase(loadAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload?.map((el: IPost) => ({
        ...el,
        id: el._id?.toString(),
      }));
    });

    builder.addCase(createNewPost.fulfilled, (state, { payload }) => {
      state.posts.push({ ...payload, id: payload._id.toString() });
    });

    builder.addCase(deletePostAsync.fulfilled, (state, { payload }) => {
      state.posts = state.posts.filter((el: IPost) => el.id !== payload);
    });

    builder.addCase(editPostAsync.fulfilled, (state, action) => {
      const index = state.posts.findIndex(
        (el: IPost) => el.id === action.payload._id.toString()
      );
      state.posts[index] = {
        ...action.payload,
        id: action.payload._id.toString(),
      };
      state.curPost = { id: null, userId: null, title: '', body: '' };
    });
  },
});

export const { changeFlag, setCurPost } = postSlice.actions;
export default postSlice.reducer;
