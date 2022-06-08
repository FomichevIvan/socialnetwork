import { Alert, AlertProps } from '@mui/material';

export const Toast = (info: AlertProps) => {
  // как children тут оказались (почему дети и северити в одном объекте инфо приходят)???
  // как расширить возможные пропсы для компонента с типом из библиотеки (если я хочу передавать и другие данные в
  // такой компонент)
  // как унифицировать объект пропсов и передавать общий для всех вариантов (ошибка, успех и тп)?
  //  как обработать наименования ошибок с firebase
  const { severity, children } = info;
  return (
    <>
      <Alert severity={severity}>{children}</Alert>
    </>
  );
};
