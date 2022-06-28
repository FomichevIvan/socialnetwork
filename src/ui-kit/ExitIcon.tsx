import { ReactElement, SyntheticEvent } from 'react';
import { IoExitOutline } from 'react-icons/io5';

interface IExitIcon {
  onClick: (e: SyntheticEvent) => void;
}

export const ExitIcon = ({ onClick }: IExitIcon): ReactElement => {
  return (
    <div>
      <i>
        <IoExitOutline onClick={onClick} size={25} color="darkslateblue" />
      </i>
    </div>
  );
};
