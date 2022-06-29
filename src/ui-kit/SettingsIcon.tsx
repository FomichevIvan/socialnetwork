import { ReactElement, SyntheticEvent } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

interface ISettingsIcon {
  onClick: (e: SyntheticEvent) => void;
}

export const SettingsIcon = ({ onClick }: ISettingsIcon): ReactElement => {
  return (
    <div>
      <i>
        <IoSettingsOutline onClick={onClick} size={25} color="darkslateblue" />
      </i>
    </div>
  );
};
