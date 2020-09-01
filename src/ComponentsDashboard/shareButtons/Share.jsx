import React from 'react';
import style from './share.module.css';
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const ShareButtons = ({ isHovered }) => (
  <div
    className={`${style.shareButtonsContainer} ${isHovered && style.shareButtonsContainerHovered}`}
  >
    <FacebookShareButton
      url="http://app.popeyeweather.jfdz14.is-academy.pl/"
      quote={'Hey! Checkout the best weather app in the World ! '}
      hashtag="#PopeyeWeatherApp"
    >
      <FacebookIcon logoFillColor="transparent" size={32} round={true} />
      <FacebookShareCount url={'http://app.popeyeweather.jfdz14.is-academy.pl/'} />
    </FacebookShareButton>
    <TwitterShareButton
      url="http://app.popeyeweather.jfdz14.is-academy.pl/"
      title="Hey! Checkout the best weather app in the World !"
      hashtags={['#PopeyeWeatherApp', '#weather', '#sunny', '#forecast']}
      // via="http://app.popeyeweather.jfdz14.is-academy.pl/"
    >
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
    <EmailShareButton
      subject="Checkout the World's best weather App - Popeye Weather"
      body="In Popeye Weather application you will find the most up-to-date weather details. Try it at: http://app.popeyeweather.jfdz14.is-academy.pl/"
    >
      <EmailIcon size={32} round={true} />
    </EmailShareButton>
  </div>
);

export default ShareButtons;
