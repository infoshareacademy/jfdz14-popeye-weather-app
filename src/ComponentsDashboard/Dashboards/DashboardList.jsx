import React from 'react';
import {
  SearchOutlined,
  LocationOnOutlined,
  StarBorderOutlined,
  NotificationsActiveOutlined,
} from '@material-ui/icons';
import style from './AppContent.module.css';

export const DashboardList = () => {
  return (
    <>
      <div className={style.listElement}>
        <LocationOnOutlined />
        <span className={style.dashboardMessage}>
          Information about weather in your current location
        </span>{' '}
      </div>
      <div className={style.listElement}>
        <SearchOutlined />
        <span className={style.dashboardMessage}>
          Search for different locations and review weather
        </span>{' '}
      </div>
      <div className={style.listElement}>
        <StarBorderOutlined />
        <span className={style.dashboardMessage}>Review your favorites locations</span>{' '}
      </div>
      <div className={style.listElement}>
        <NotificationsActiveOutlined />
        <span className={style.dashboardMessage}>Set notifications</span>{' '}
      </div>
    </>
  );
};
