import { FiEdit, FiSave } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { ReactElement, SyntheticEvent } from 'react';
import { Button, IconButton } from '@mui/material';

interface IEditBlockProps {
  show: boolean;
  field: string;
  edit: boolean;
  name: string;
  onEdit: (name: string) => void;
  onSave: () => void;
}

export const EditBlock = ({
  show,
  field,
  edit,
  name,
  onEdit,
  onSave,
}: IEditBlockProps): ReactElement => {
  return (
    <div className={`edit-block${show || field === name ? '' : '-hidden'}`}>
      <IconButton onClick={() => onEdit(name)}>
        {edit ? <MdOutlineCancel size={20} /> : <FiEdit size={20} />}
      </IconButton>
      <IconButton disabled={!edit} onClick={onSave}>
        <FiSave size={20} />
      </IconButton>
    </div>
  );
};
