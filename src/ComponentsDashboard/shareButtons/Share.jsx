import React from 'react';
import style from './share.module.css';
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

const ShareButtons = ({ isHovered }) => (
  <div
    className={`${style.shareButtonsContainer}, ${isHovered && style.shareButtonsContainerHovered}`}
    // isHovered={this.handleMouseHover}
    // onMouseLeave={this.handleMouseHover}
  >
    <FacebookShareButton
      url="http://app.popeyeweather.jfdz14.is-academy.pl/"
      quote={'Hey! Check out the best weather app in the World ! '}
      hashtag="#PopeyeWeatherApp"
    >
      <FacebookIcon logoFillColor="transparent" size={32} round={true} />
    </FacebookShareButton>
    <EmailShareButton>
      <EmailIcon size={32} round={true} />
    </EmailShareButton>
  </div>
);

export default ShareButtons;
