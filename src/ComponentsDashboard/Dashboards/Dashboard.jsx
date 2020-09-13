import React from 'react';
import style from './AppContent.module.css';
import {
  LocationOnOutlined,
  NotificationsActiveOutlined,
  SearchOutlined,
  StarBorderOutlined,
} from '@material-ui/icons';

import { InvitationMessage } from './InvitationMessage';
import { AppContent } from './AppContent';
import ChartOne from '../Charts/ChartOne';
import firebase from 'firebase';

class Dashboard extends React.Component {
  state = {
    user: null,
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      this.setState({ user });
    });
  };

  render() {
    return (
      <>
        <AppContent>
          <InvitationMessage
            message={
              <div className={style.dashboardInvitation}>
                {`Dear ${this.state.user && this.state.user.email}`}
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
          <div className={style.stats}>
            <h2 className={style.chartsDescription}>Stats</h2>
            <ChartOne />
          </div>
        </AppContent>
      </>
    );
  }
}

export default Dashboard;
