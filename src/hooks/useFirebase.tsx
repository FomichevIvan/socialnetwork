import { auth } from '../index';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useFirebase = () => {
  const register = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    }
  };

  return { register };
};

// компонент страница с формой регистрации/аутентификации (мыло, пароль). Отправлять в файрбейс, если зареган, то он
// идет дальше. Записать в стор юзер. Сейчас туда складываем объект юзера целиком.
//принимает флаг и рендер соответств.формы
