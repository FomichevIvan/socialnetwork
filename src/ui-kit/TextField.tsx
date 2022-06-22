import { ReactElement } from 'react';
import { FiEdit, FiSave } from 'react-icons/fi';

interface ITextFieldProps {
  text: string | undefined;
  label: string;
}

export const TextField = ({ text, label }: ITextFieldProps): ReactElement => {
  return (
    <div>
      {label} : {text}
      <div className="edit-block">
        <i>
          <FiEdit />
        </i>
        <i>
          <FiSave />
        </i>
      </div>
    </div>
  );
};
