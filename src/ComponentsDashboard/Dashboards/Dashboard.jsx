import React from 'react';
import style from './AppContent.module.css';
import {
  LocationOnOutlined,
  NotificationsActiveOutlined,
  SearchOutlined,
  StarBorderOutlined,
} from '@material-ui/icons';

import { InvitationMessage } from './InvitationMessage';
<<<<<<< HEAD

=======
>>>>>>> develop
import { AppContent } from './AppContent';
import Charts from '../Charts/Charts';

export const Dashboard = () => {
  return (
    <>
      <AppContent>
        <InvitationMessage
          message={
            <div className={style.dashboardInvitation}>
              Dear User,
              <br />
              in our application you can:
            </div>
          }
        />

        <div className={style.listElement}>
          <LocationOnOutlined color="primary" />
          <span className={style.dashboardMessage}>
            learn information about weather conditions in your current location
          </span>
        </div>
        <div className={style.listElement}>
          <SearchOutlined color="primary" />
          <span className={style.dashboardMessage}>
            search for different locations and review weather
          </span>
        </div>
        <div className={style.listElement}>
          <StarBorderOutlined color="primary" />
          <span className={style.dashboardMessage}>review your favorites locations</span>
        </div>
        <div className={style.listElement}>
          <NotificationsActiveOutlined color="primary" />
          <span className={style.dashboardMessage}>set your own notifications</span>
        </div>
      </AppContent>
      <div>
        <h2 className={style.chartsDescription}>Stats</h2>
        <Charts />
      </div>
    </>
  );
};

// export default Dashboard;
