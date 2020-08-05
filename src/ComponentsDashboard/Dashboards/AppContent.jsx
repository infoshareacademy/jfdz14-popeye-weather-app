import React from 'react';
import style from './AppContent.module.css';
import {
  HomeOutlined,
  LocationOnOutlined,
  NotificationsActiveOutlined,
  SearchOutlined,
  StarBorderOutlined,
  AddLocationOutlined,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { AppHeader } from './AppHeader';

export function AppContent({ children }) {
  return (
    <div className={style.wrapper}>
      <AppHeader text={'Hello, USER'} />
      <div className={style.content}>
        <Sidebar />
        <div className={style.contentMain}>{children}</div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <nav>
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
          Favorites
        </SidebarLink>

        <SidebarLink to="/newlocation" icon={<AddLocationOutlined color="primary" />}>
          Add location
        </SidebarLink>
        <SidebarLink to="/notifications" icon={<NotificationsActiveOutlined color="primary" />}>
          Notifications
        </SidebarLink>
      </nav>
    </aside>
  );
}

function SidebarLink({ to, icon, children }) {
  return (
    <Link to={to} className={style.sidebarLink}>
      {icon}
      <span className={style.sidebarLinkLabel}>{children}</span>
    </Link>
  );
}