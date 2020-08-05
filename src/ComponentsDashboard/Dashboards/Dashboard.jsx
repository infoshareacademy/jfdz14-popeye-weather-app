import React from 'react';
import style from './AppContent.module.css';
import {
  HomeOutlined,
  LocationOnOutlined,
  NotificationsActiveOutlined,
  SearchOutlined,
  StarBorderOutlined,
} from '@material-ui/icons';

import { InvitationMessage } from './InvitationMessage';
import { ChartOne } from '../Charts/ChartOne';
import { ChartTwo } from '../Charts/ChartTwo';
import { AppContent } from './AppContent';

export const Dashboard = () => {
  return (
    <>
      <AppContent>
        <InvitationMessage
          message={
            <>
              <div className={style.dashboardInvitation}>
                Dear Katarzyna,
                <br />
                in our application you can:
              </div>
            </>
          }
        />

        <div className={style.listElement}>
          <HomeOutlined />
          <span className={style.dashboardMessage}>Home Page</span>
        </div>
        <div className={style.listElement}>
          <LocationOnOutlined />
          <span className={style.dashboardMessage}>
            Information about weather in your current location
          </span>
        </div>
        <div className={style.listElement}>
          <SearchOutlined />
          <span className={style.dashboardMessage}>
            Search for different locations and review weather
          </span>
        </div>
        <div className={style.listElement}>
          <StarBorderOutlined />
          <span className={style.dashboardMessage}>Review your favorites locations</span>
        </div>
        <div className={style.listElement}>
          <NotificationsActiveOutlined />
          <span className={style.dashboardMessage}>Set notifications</span>
        </div>
      </AppContent>

      <div className={style.chartsBackground}>
        <ChartOne />
        <ChartTwo />
      </div>
    </>
  );
};

// export default Dashboard;
