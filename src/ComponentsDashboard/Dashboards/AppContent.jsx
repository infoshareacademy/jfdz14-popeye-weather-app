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
import { SmallImg } from './SmallImg';

export function AppContent({ children }) {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <SmallImg />
        <div className={style.textInHeader}>
          <span>Hello, Katarzyna</span>
        </div>
      </div>
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
        <SidebarLink to="/home" icon={<HomeOutlined />}>
          Home
        </SidebarLink>
        <SidebarLink to="/location" icon={<LocationOnOutlined />}>
          Current location
        </SidebarLink>
        <SidebarLink to="/search" icon={<SearchOutlined />}>
          Search
        </SidebarLink>
        <SidebarLink to="/favorites" icon={<StarBorderOutlined />}>
          Favorites
        </SidebarLink>

        <SidebarLink to="/newlocation" icon={<AddLocationOutlined />}>
          Add location
        </SidebarLink>
        <SidebarLink to="/notifications" icon={<NotificationsActiveOutlined />}>
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
