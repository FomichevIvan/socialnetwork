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
// сделать компонент uploadFile, куда мы пропсом передаем функцию из родителя которая сетит стейт родителя. Внутри
// аплоадФайл дожна быть логика, которая сохранияте файл в сторадж.Можно использовтаь юю.айди или имя из ОС
// конечным результатом работы жтого компонента будет ссылка на картинку (урл), которая сетится в состояние родителя
// через
// переданную
// функцию.

// компонент возвращает инпут с возможностью выбора файла

// разбить на две части - юуайкит, где просто инпут и стиль, и логика уже в компоненте, где ретерн есть юайкит
