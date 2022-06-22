import { ReactElement, SyntheticEvent } from 'react';

interface ITextInputProps {
  text: string | undefined;
  onSubmit: (e: SyntheticEvent) => void;
  name: string;
  label: string;
}

export const TextInput = ({
  text,
  onSubmit,
  name,
  label,
}: ITextInputProps): ReactElement => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor={name}>{label}</label>
        <input defaultValue={text} name={name} id={name} />
        <button type="submit">Save</button>
      </form>
    </>
  );
};
