import { FileInput } from '../ui-kit/FileInput';
import { ReactElement, SyntheticEvent } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { IFileLoader } from '../shared/interfaces/post';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { showLoading } from '../store/redux/users';

export const FileLoader = (props: IFileLoader): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();

  const handleFile = (e: SyntheticEvent) => {
    dispatch(showLoading(true));
    const { files } = e.target as HTMLInputElement;
    const storage = getStorage();
    const storageRef = ref(storage, self.crypto.randomUUID());
    if (files) {
      uploadBytes(storageRef, files[0])
        .then(() => {
          return getDownloadURL(storageRef);
        })
        .then(url => props.setImgUrl(url));
    }
  };
  return <FileInput onChange={handleFile} />;
};
