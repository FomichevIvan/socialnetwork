import React, { ReactElement, useEffect } from 'react';

import './App.css';
import { AuthForm } from './components/AuthForm';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { PostsPage } from './pages/PostsPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/redux/store';
import { signInAsCurrUser } from './store/redux/users';
import { TopPanel } from './components/TopPanel';
import { MessageNotifier } from './components/MessageNotifier';
import { getDatabase, ref, onValue } from 'firebase/database';

// import { signInAndGetData } from './store/redux/firebase';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  // console.log(user, 'user in app');
  const message = useSelector((state: RootState) => state.user.message);

  const navigate = useNavigate();

  const { currentUser } = auth;

  const getUserData = (uid: string) => {
    console.log('getting data');
    const db = getDatabase();
    const userRef = ref(db, 'users/' + uid);
    onValue(userRef, snapshot => {
      const data = snapshot.val();
      dispatch(signInAsCurrUser(data));
      data && navigate('/'); // можно ли это назвать решением?
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log('if');
        getUserData(user.uid); // если юзер залогинен в аус, мы получаем его данные из БД
      } else {
        console.log('else');
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [currentUser]); // ставлю юзера из редакс - уходим в бесконечный цикл, а в таком виде при ошибке в бд я не
  // получаю переадресацию в логин
  // что мне поставить в зависимости или условия внутри ифа, чтобы при наличии аутентификации, но отсутсвии данных в
  // юзере, пользователь долже был снова логиниться или регаться

  return (
    <>
      {message && <MessageNotifier />}
      {user && <TopPanel />}
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/login'} element={<AuthForm />} />
        <Route path={'/register'} element={<AuthForm />} />
        <Route path={'/posts'} element={<PostsPage />} />
      </Routes>
    </>
  );
}

// если имитировать ошибку бд, то фактически юзер уже есть в объекте аус (при регистрации нового, например), но
// из-за ошибки в БД мы не записали юзера в бд и тогда я не могу попасть на компонент входа, но при этом скрыта
// ТопПанель, словно юзер не вошел.
export default App;
