import { ReactElement } from 'react';
import { CustomIcon } from '../ui-kit/CustomIcon';
import { signOutUserAsync } from '../store/redux/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { ExitIcon } from '../ui-kit/ExitIcon';
import { SettingsIcon } from '../ui-kit/SettingsIcon';
import { NotificationIcon } from '../ui-kit/NotifcationIcon';

export const UserDashboard = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);

  const signOut = () => {
    dispatch(signOutUserAsync());
  };

  const checkSettings = () => {
    console.log('go to settings');
  };

  const checkNotifications = () => {
    console.log('go to notifications');
  };
  return (
    <div className="dashboard-container">
      <div className="greet">{`Hi, ${user?.name}!`}</div>
      <CustomIcon url={user?.avatar} />
      <NotificationIcon onClick={checkNotifications} />
      <SettingsIcon onClick={checkSettings} />
      <ExitIcon onClick={signOut} />
    </div>
  );
};
