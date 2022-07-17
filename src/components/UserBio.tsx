import { ReactElement, SyntheticEvent, useState } from 'react';

import { FileLoader } from './FileLoader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { updateUserAsync } from '../store/redux/firebase';
import { IUserFields } from '../shared/interfaces/interfaces';
import { InformationBlock } from './InformationBlock';
import { showLoading } from '../store/redux/users';
import { Loader } from './Loader';

export const UserBio = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);
  const dispatch = useDispatch<AppDispatch>();

  const [field, setField] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);

  const onChangeAvatar = (url: string): void => {
    dispatch(showLoading(true));
    dispatch(
      updateUserAsync({
        avatar: url,
      })
    );
  };
  const onEdit = (name: string) => {
    user && name && setData(user[name as keyof IUserFields]);
    setField(name);
    setEdit(edit => !edit);
    setShow(show => !show);
  };

  const onChangeField = (updates: { [key: string]: string }): void => {
    dispatch(updateUserAsync(updates));
  };

  const onChangeInput = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setData(value);
  };

  const onUpdate = () => {
    if (field) {
      const updates = { [field]: data };
      onChangeField(updates);
    }
    setEdit(edit => !edit);
    setShow(show => !show);
  };

  return (
    <div className="user-bio-cont">
      <div className="photo-cont">
        <div className="photo-cover">
          {!loading ? <img className="photo" src={user?.avatar} /> : <Loader />}
        </div>
        <FileLoader setImgUrl={onChangeAvatar} currUrl={user?.avatar} />
      </div>
      <div className="details-cont">
        <InformationBlock
          clickedField={field}
          textInputData={data}
          textFieldData={user?.name}
          edit={edit}
          label={'Name'}
          show={show}
          thisFieldName={'name'}
          onChangeInput={onChangeInput}
          onEdit={onEdit}
          onSave={onUpdate}
        />

        <InformationBlock
          clickedField={field}
          textInputData={data}
          textFieldData={user?.lastName}
          edit={edit}
          label={'Last name'}
          show={show}
          thisFieldName={'lastName'}
          onChangeInput={onChangeInput}
          onEdit={onEdit}
          onSave={onUpdate}
        />

        <InformationBlock
          clickedField={field}
          textInputData={data}
          textFieldData={user?.city}
          edit={edit}
          label={'City'}
          show={show}
          thisFieldName={'city'}
          onChangeInput={onChangeInput}
          onEdit={onEdit}
          onSave={onUpdate}
        />
      </div>
    </div>
  );
};
