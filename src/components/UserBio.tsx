import { ReactElement, ReactNode, SyntheticEvent, useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import { Button } from '@mui/material';
import { FileInput } from '../ui-kit/FileInput';
import { FileLoader } from './FileLoader';

export const UserBio = (): ReactElement => {
  const [photo, setPhoto] = useState<string>('');

  return (
    <div className="user-bio-cont">
      <div className="photo-cont">
        {photo ? (
          <img className="photo" src={photo} />
        ) : (
          <FileLoader setImgUrl={setPhoto} />
        )}
      </div>
      <div className="details-cont">
        <div>Деталь два</div>
        <div>Деталь три</div>
      </div>
    </div>
  );
};

// отобразить картинку, реализовать возможность ее заменить. двойной контейнер, и слой с иконкой становится видимым
// по ховер на картинке

//отобразить все поля пользователя из БД
//интерфейсы для постов, юзера
//редактирование текстовых полей
