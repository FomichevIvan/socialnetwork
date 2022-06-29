import { Input } from '@mui/material';
import { IFileInputProps } from '../shared/interfaces/post';
import { ReactElement } from 'react';
import { GrCloudUpload } from 'react-icons/gr';

export const FileInput = (props: IFileInputProps): ReactElement => {
  return (
    <div className="custom-file-upload-cont">
      <label
        onChange={props.onChange}
        htmlFor="file-upload"
        className="custom-file-upload"
      >
        <i>
          <GrCloudUpload size="40" opacity=".5" />
        </i>

        <Input id="file-upload" type="file" />
      </label>
    </div>
  );
};
