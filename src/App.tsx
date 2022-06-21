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

//как нам лучше получать uid везде: прокидывать в функцию или получать каждый раз из объекта auth? (updateUserAsync)
// как сделать функцию апдейта более универсальной, чтобы можно было передавать любые поля юзера на замену
// переходим на обновления за счет обзервера от Файрбейз?
