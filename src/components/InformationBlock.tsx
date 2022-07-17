import { ReactElement, SyntheticEvent } from 'react';
import { TextInput } from '../ui-kit/TextInput';
import { TextField } from '../ui-kit/TextField';
import { EditBlock } from './EditBlock';
import { IInformationBlock } from '../shared/interfaces/interfaces';

export const InformationBlock = ({
  edit,
  clickedField,
  textInputData,
  onChangeInput,
  textFieldData,
  label,
  show,
  thisFieldName,
  onEdit,
  onSave,
}: IInformationBlock): ReactElement => {
  return (
    <div className="detail">
      {edit && clickedField === thisFieldName ? (
        <TextInput text={textInputData} onChangeInput={onChangeInput} />
      ) : (
        <TextField text={textFieldData} label={label} />
      )}
      {
        <EditBlock
          show={show}
          field={clickedField}
          name={thisFieldName}
          onEdit={onEdit}
          onSave={onSave}
          edit={edit}
        />
      }
    </div>
  );
};
