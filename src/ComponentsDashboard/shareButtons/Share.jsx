import React from 'react';
import style from './share.module.css';
import {
  FacebookIcon,
  FacebookShareButton,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

const pageUrl = 'http://app.popeyeweather.jfdz14.is-academy.pl/';

const ShareButtons = ({ isHovered }) => (
  <div
    className={`${style.shareButtonsContainer} ${isHovered && style.shareButtonsContainerHovered}`}
  >
    <FacebookShareButton
      url={pageUrl}
      quote={'Hey! Checkout the best weather app in the World ! '}
      hashtag="#PopeyeWeatherApp"
    >
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
    <TwitterShareButton
      url={pageUrl}
      title="Hey! Checkout the best weather app in the World !"
      hashtags={['#PopeyeWeatherApp', '#weather', '#sunny', '#forecast']}
      // via="http://app.popeyeweather.jfdz14.is-academy.pl/"
    >
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
    <LinkedinShareButton
      url={pageUrl}
      title="Hey! Checkout the best weather app in the World !"
      summary="In Popeye Weather application you will find the most up-to-date weather details."
    >
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>
    <EmailShareButton
      subject="Checkout the World's best weather App - Popeye Weather"
      body="In Popeye Weather application you will find the most up-to-date weather details. Try it at: http://app.popeyeweather.jfdz14.is-academy.pl/"
    >
      <EmailIcon size={32} round={true} />
    </EmailShareButton>
  </div>
);

export default ShareButtons;
