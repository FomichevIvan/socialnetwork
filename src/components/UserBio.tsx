import { ReactElement, SyntheticEvent, useState } from 'react';

import { FileLoader } from './FileLoader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { updateUserAsync } from '../store/redux/firebase';
import { TextInput } from '../ui-kit/TextInput';
import { TextField } from '../ui-kit/TextField';

export const UserBio = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const [field, setField] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);

  const onChangeAvatar = (url: string): void => {
    dispatch(
      updateUserAsync({
        avatar: url,
      })
    );
  };
  const onEdit = (e: SyntheticEvent) => {
    const { id } = e.target as HTMLInputElement;
    setEdit(edit => !edit);
    setField(id);
  };

  const onChangeInput = (updates: object): void => {
    dispatch(updateUserAsync(updates));
  };

  const onUpdate = (e: SyntheticEvent) => {
    e.preventDefault();
    const input: any = e.target as HTMLInputElement;
    const updates = { [field as string]: input[field].value };
    onChangeInput(updates);
    setEdit(edit => !edit);
  };

  return (
    <div className="user-bio-cont">
      <div className="photo-cont">
        <img className="photo" src={user?.avatar} />
        <FileLoader setImgUrl={onChangeAvatar} />
      </div>
      <div className="details-cont">
        <div className="detail">
          <button id="name" onClick={onEdit}>
            {edit ? 'Cancel' : 'Edit'}
          </button>

          {edit && field === 'name' ? (
            <TextInput
              text={user?.name}
              onSubmit={onUpdate}
              name={field}
              label={'Name'}
            />
          ) : (
            <TextField text={user?.name} label={'Name'} />
          )}
        </div>

        <div className="detail">
          <button id="lastName" onClick={onEdit}>
            {edit ? 'Cancel' : 'Edit'}
          </button>

          {edit && field === 'lastName' ? (
            <TextInput
              text={user?.lastName}
              onSubmit={onUpdate}
              name={field}
              label={'Last name'}
            />
          ) : (
            <TextField text={user?.lastName} label={'Last name'} />
          )}
        </div>

        <div className="detail">
          <button id="city" onClick={onEdit}>
            {edit ? 'Cancel' : 'Edit'}
          </button>

          {edit && field === 'city' ? (
            <TextInput
              text={user?.city}
              onSubmit={onUpdate}
              name={field}
              label={'City'}
            />
          ) : (
            <TextField text={user?.city} label={'City'} />
          )}
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
