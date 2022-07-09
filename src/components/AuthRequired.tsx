import { ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../index';

export const AuthRequired = ({ children, path }: any) => {
  const location = useLocation();

  const navigate = useNavigate();
  const { currentUser } = auth;
  useEffect(() => {
    if (currentUser) {
      console.log(path);
      // console.log(navigate);
      navigate(path);
    }
  }, [currentUser]);

  return children;
};
