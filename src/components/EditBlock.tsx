import { FiEdit, FiSave } from 'react-icons/fi';
import { ReactElement, SyntheticEvent } from 'react';
import { Button, IconButton } from '@mui/material';

interface IEditBlockProps {
  show: boolean;
  field: string;
  edit: boolean;
  name: string;
  onEdit: (name: string) => void;
  onSave: (e: SyntheticEvent) => void;
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
        <FiEdit size={20} />
      </IconButton>
      <IconButton onClick={onSave}>
        <i>
          <FiSave id={name} size={20} />
        </i>
      </IconButton>
      {/*<Button id={name} onClick={onEdit}>*/}
      {/*  {edit ? 'Cancel' : 'Edit'}*/}
      {/*</Button>*/}

      {/*<Button disabled={!edit} onClick={onSave}>*/}
      {/*  Save*/}
      {/*</Button>*/}
    </div>
  );
};
