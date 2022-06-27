import { FiEdit, FiSave } from 'react-icons/fi';
import { ReactElement, SyntheticEvent } from 'react';
import { Button } from '@mui/material';

interface IEditBlockProps {
  show: boolean;
  field: string;
  edit: boolean;
  name: string;
  onEdit: (e: SyntheticEvent) => void;
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
      <Button id={name} onClick={onEdit}>
        {edit ? 'Cancel' : 'Edit'}
      </Button>

      <Button disabled={!edit} onClick={onSave}>
        Save
      </Button>
    </div>
  );

  // return (
  //   <div className={`edit-block${show || field === name ? '' : '-hidden'}`}>
  //     <div>
  //       <FiEdit id={name} onClick={onEdit} size={30} />
  //     </div>
  //     <button>
  //       <i>
  //         <FiSave size={30} id={name} onClick={onSave} />
  //       </i>
  //     </button>
  //   </div>
  // );
};
