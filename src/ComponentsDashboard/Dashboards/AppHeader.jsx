import React from 'react';
import style from './AppContent.module.css';
import { SmallImg } from './SmallImg';
import Button from '@material-ui/core/Button';
import { ExposureNeg1TwoTone } from '@material-ui/icons';

import firebase from 'firebase';
import { NavLink } from 'react-router-dom';

// export const TextInHeader = ({ text }) => {
//   return (
//     <div className={style.textInHeader}>
//       <span>{text}</span>
//     </div>
//   );
// };

// export const AppHeader = ({ text }) => {
//   return (
//     <div className={style.header}>
//       <SmallImg />
//       <TextInHeader text={'Popeye Weather'} className={style.textInHeader}/>
//     </div>
//   );
// };

class AppHeader extends React.Component {
  state = {
    user: null,
  };

  handleOnSignOutClick = () => {
    firebase.auth().signOut();
  };

  componentDidMount() {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user,
      });
    });

    this.setState({
      unsubscribe,
    });
  }

  // componentWillUnmount() {
  //   this.state.unsubscribe();
  // }

  render() {
    return (
      <div className={style.header}>
        <SmallImg />
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          {this.state.user ? (
            <Button
              style={{ backgroundColor: 'navy', color: 'white' }}
              type="submit"
              onClick={this.handleOnSignOutClick}
              component={NavLink}
              to={'/signin'}
            >
              Sign Out
            </Button>
          ) : (
            <Button
              style={{ backgroundColor: 'navy', color: 'white' }}
              type="submit"
              component={NavLink}
              to="/signin"
            >
              Sign In
            </Button>
          )}
        </div>

        {/* <TextInHeader text={'Popeye Weather'} className={style.textInHeader} /> */}
      </div>
    );
  }
}

export default AppHeader;
