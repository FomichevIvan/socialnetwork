import { Input } from '@mui/material';
import { ReactElement, SyntheticEvent } from 'react';
import { ITextInputProps } from '../shared/interfaces/interfaces';

export const TextInput = ({
  text,
  onChangeInput,
}: ITextInputProps): ReactElement => {
  return (
    <div className="text-input">
      <Input onChange={onChangeInput} value={text} />
    </div>
  );
};
