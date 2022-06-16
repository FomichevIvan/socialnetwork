import { FileInput } from '../ui-kit/FileInput';
import { ReactElement, SyntheticEvent } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { IFileLoader } from '../shared/interfaces/post';

export const FileLoader = (props: IFileLoader): ReactElement => {
  const handleFile = (e: SyntheticEvent) => {
    const { files } = e.target as HTMLInputElement;
    const storage = getStorage();
    const storageRef = ref(storage, self.crypto.randomUUID());
    files &&
      uploadBytes(storageRef, files[0])
        .then(() => getDownloadURL(storageRef))
        .then(url => props.setImgUrl(url));
  };
  return <FileInput onChange={handleFile} />;
};

// вообще, мы после должны будем загружать из облака и не просто сетить в урл картинки, а асинхронно писать в объект
// нашего юзера (поле такое-то теперь имеет ссылку на картинку в сторадже такую-то)????
