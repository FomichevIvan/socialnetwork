import { ReactElement, SyntheticEvent } from 'react';

interface IMenuButton {
  id: string;
  fontColor: string;
  text: string;
  background: string;
  containerBckgr: string;
  textColor: string;
  onClick: (e: SyntheticEvent) => void;
}

export const MenuButton = (props: IMenuButton): ReactElement => {
  return (
    <div
      className="menu-button-cont"
      style={{ backgroundColor: props.containerBckgr }}
    >
      <button
        id={props.id}
        onClick={props.onClick}
        color={props.fontColor}
        style={{ background: props.background, color: props.textColor }}
      >
        {props.text}
      </button>
    </div>
  );
};
