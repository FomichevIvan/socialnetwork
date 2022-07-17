import { ReactElement, SyntheticEvent } from 'react';
import { IMenuButton } from '../shared/interfaces/interfaces';

export const MenuButton = ({
  id,
  containerColor,
  textColor,
  text,
  buttonColor,
  onClick,
}: IMenuButton): ReactElement => {
  return (
    <div
      className="menu-button-cont"
      style={{ backgroundColor: containerColor }}
    >
      <button
        id={id}
        onClick={onClick}
        style={{ background: buttonColor, color: textColor }}
      >
        {text}
      </button>
    </div>
  );
};
