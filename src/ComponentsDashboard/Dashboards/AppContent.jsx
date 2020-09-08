import React from 'react';
import style from './AppContent.module.css';
import {
  HomeOutlined,
  LocationOnOutlined,
  NotificationsActiveOutlined,
  SearchOutlined,
  StarBorderOutlined,
  AddLocationOutlined,
  MapOutlined,
} from '@material-ui/icons';

import { Link } from 'react-router-dom';
import AppHeader from './AppHeader';
import ShareButtons from '../shareButtons/Share';

export function AppContent({ children }) {
  return (
    <div className={style.wrapper}>
      <AppHeader text={''} />
      <div className={style.content}>
        <Sidebar />
        <div className={style.contentMain}>{children}</div>
      </div>
    </div>
  );
}

class Sidebar extends React.Component {
  state = {
    isSidebarHovered: false,
  };

  handleMouseHover = () => {
    this.setState(prevState => ({
      isSidebarHovered: !prevState.isSidebarHovered,
    }));
  };

  render() {
    return (
      <aside
        className={style.sidebar}
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <nav className={style.sidebarNav}>
          <SidebarLink> Welcome, (Your Name)</SidebarLink>
          <SidebarLink to="/home" icon={<HomeOutlined color="primary" />}>
            Home
          </SidebarLink>
          <SidebarLink to="/location" icon={<LocationOnOutlined color="primary" />}>
            Current location
          </SidebarLink>
          <SidebarLink to="/search" icon={<SearchOutlined color="primary" />}>
            Search
          </SidebarLink>
          <SidebarLink to="/favorites" icon={<StarBorderOutlined color="primary" />}>
            Favourites
          </SidebarLink>

          <SidebarLink to="/newlocation" icon={<AddLocationOutlined color="primary" />}>
            Add location
          </SidebarLink>
          <SidebarLink to="/added-location" icon={<MapOutlined color="primary" />}>
            Users locations
          </SidebarLink>
          <SidebarLink to="/notifications" icon={<NotificationsActiveOutlined color="primary" />}>
            Notifications
          </SidebarLink>
          <ShareButtons isHovered={this.state.isSidebarHovered} />
        </nav>
      </aside>
    );
  }
}

function SidebarLink({ to, icon, children }) {
  const Component = to ? Link : 'span';
  const props = {
    className: style.sidebarLink,
  };
  if (to) {
    props.to = to;
  }
  return (
    <Component {...props}>
      {icon}
      <span className={style.sidebarLinkLabel}>{children}</span>
    </Component>
  );
}
