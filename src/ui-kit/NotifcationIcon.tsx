import { ReactElement, SyntheticEvent } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';

interface INotificationIcon {
  onClick: (e: SyntheticEvent) => void;
}

export const NotificationIcon = ({
  onClick,
}: INotificationIcon): ReactElement => {
  return (
    <div>
      <i>
        <IoNotificationsOutline
          onClick={onClick}
          size={25}
          color="darkslateblue"
        />
      </i>
    </div>
  );
};
