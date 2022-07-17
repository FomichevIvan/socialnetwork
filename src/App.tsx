import './App.css';
import { AuthForm } from './components/AuthForm';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/redux/store';
import { TopPanel } from './components/TopPanel';
import { MessageNotifier } from './components/MessageNotifier';
import { auth } from './index';
import {
  showLoading,
  showWarning,
  signInAsCurrUser,
} from './store/redux/users';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = useSelector((state: RootState) => state.user.user);
  const message = useSelector((state: RootState) => state.user.message);
  const loading = useSelector((state: RootState) => state.user.loading);

  const { currentUser } = auth;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const getUserData = (uid: string) => {
    dispatch(showLoading(true));
    const db = getDatabase();
    const userRef = ref(db, `users/${uid}`);
    return onValue(userRef, snapshot => {
      console.log('onValue is getting data');
      const data = snapshot.val();
      data && dispatch(signInAsCurrUser(data));
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        getUserData(user.uid);
      } else {
        dispatch(showWarning('Sign up or login is required!'));
        navigate('/login'); // protected route
      }
    });
    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return (
    <>
      {message && <MessageNotifier />}
      {user && <TopPanel />}
      <Routes>
        <Route path={'*'} element={loading && !user ? null : <MainPage />} />
        <Route path={'login'} element={<AuthForm />} />
        <Route path={'register'} element={<AuthForm />} />
      </Routes>
    </>
  );
}

export default App;

// кастомная валидация полей при регистрации
// строка поиска по постам
// сохранение всех пользовательских картинок при загрузке
// привязаться на закрытие вкладки (событие браузера) вешаем на монтирование апп слушатель на виндоу (см.телегу)

// передача пропсами на один уровень вниз (массив постов, например), или лучше брать из редакс?
// как из айди пользователя делать имя без особых затрат (в посте только юид автора, что дальше?)
// избежать мелькания экрана при неверном маршруте на главном экране Апп
// как запретить переходить на регистрацию или логин вводя адрес в строке (редакс пустой, хотя юзер есть в аус)
// как работает компонент картинок в муях
