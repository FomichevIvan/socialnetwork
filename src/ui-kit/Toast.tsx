import { Alert, AlertProps } from '@mui/material';

export const Toast = (info: AlertProps) => {
  // как children тут оказались???
  // как унифицировать объект пропсов и передавать общий для всех вариантов?
  //  как обработать наименования ошибок с firebase
  const { severity, children } = info;
  return (
    <>
      <Alert severity={severity}>{children}</Alert>
    </>
  );
};
