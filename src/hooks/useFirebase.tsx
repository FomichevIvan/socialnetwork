import { auth } from '../index';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const useFirebase = () => {
  const onAuth = async (isNew: boolean, email: string, password: string) => {
    if (isNew) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const nonSerialized = JSON.parse(JSON.stringify(user));
        return nonSerialized;
      } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const nonSerialized = JSON.parse(JSON.stringify(user));
        return nonSerialized;
      } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
      }
    }
  };

  return onAuth;
};

// компонент страница с формой регистрации/аутентификации (мыло, пароль). Отправлять в файрбейс, если зареган, то он
// идет дальше. Записать в стор юзер. Сейчас туда складываем объект юзера целиком.
//принимает флаг и рендер соответств.формы
