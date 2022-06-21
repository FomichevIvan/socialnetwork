import { ReactElement, useState } from 'react';

import { FileLoader } from './FileLoader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { updateUserAsync } from '../store/redux/firebase';

export const UserBio = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const onUpdUserAvatar = (url: string): void => {
    dispatch(
      updateUserAsync({
        avatar: url,
      })
    );
  };

  return (
    <div className="user-bio-cont">
      <div className="photo-cont">
        <img className="photo" src={user?.avatar} />
        <FileLoader setImgUrl={onUpdUserAvatar} />
      </div>
      <div className="details-cont">
        <div>
          <h3>Name: {user?.name}</h3>
        </div>
        <div>
          <h3> Last name: {user?.lastName}</h3>
        </div>
        <div>
          <h3> City: {user?.city}</h3>
        </div>
      </div>
    </div>
  );
};

// отобразить картинку, реализовать возможность ее заменить. двойной контейнер, и слой с иконкой становится видимым
// по ховер на картинке

//отобразить все поля пользователя из БД
//интерфейсы для постов, юзера
//редактирование текстовых полей
