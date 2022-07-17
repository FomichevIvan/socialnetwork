import { Input } from '@mui/material';
import { IFileInputProps } from '../shared/interfaces/interfaces';
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
          <GrCloudUpload size="35" opacity=".3" />
        </i>

        <Input id="file-upload" type="file" />
      </label>
    </div>
  );
};
