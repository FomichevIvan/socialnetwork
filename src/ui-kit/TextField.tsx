import { ReactElement, SyntheticEvent } from 'react';
import { ITextFieldProps } from '../shared/interfaces/interfaces';

export const TextField = ({ text, label }: ITextFieldProps): ReactElement => {
  return (
    <div className="text-field">
      <div className="text-field-label">{label}:</div>
      <div className="text-field-text">{text}</div>
    </div>
  );
};
