import './App.css';
import { AuthForm } from './components/AuthForm';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { useSelector } from 'react-redux';
import { RootState } from './store/redux/store';
import { TopPanel } from './components/TopPanel';
import { MessageNotifier } from './components/MessageNotifier';

function App() {
  const user = useSelector((state: RootState) => state.user.user);
  const message = useSelector((state: RootState) => state.user.message);

  return (
    <>
      {message && <MessageNotifier />}
      {user && <TopPanel />}
      <Routes>
        <Route path={'*'} element={<MainPage />} />
        <Route path={'login'} element={<AuthForm />} />
        <Route path={'register'} element={<AuthForm />} />
      </Routes>
    </>
  );
}

export default App;

// заглушка на посты (джейсон массив объектов)
// стили
// кастомная валидация полей при регистрации
// строка поиска по постам
// сохранение всех пользовательских картинок при загрузке

// привязаться на закрытие вкладки (событие браузера) вешаем на монтирование апп слушатель на виндоу (см.телегу)
