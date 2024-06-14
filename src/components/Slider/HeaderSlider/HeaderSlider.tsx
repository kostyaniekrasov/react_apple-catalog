import React from 'react';
import Slider, { Settings } from 'react-slick';
import MediaQuery from 'react-responsive';

import './HeaderSlider.scss';
import { SCREEN_SIZES } from '../../../styles/utils/icons/screenSizes';

export const HeaderSlider: React.FC = () => {
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true,
    className: 'banner__slider',
  };

  return (
    <>
      <MediaQuery maxWidth={SCREEN_SIZES.mobileMax}>
        <Slider {...sliderSettings}>
          <div className="slider-slide">
            <div className="slide-image">
              <img
                src="img/bannerIphoneMobile.webp"
                className="slide-image--img"
                alt="iPhone 14 Pro"
              />
            </div>
          </div>
          <div className="slider-slide">
            <div className="slide-image">
              <img
                src="img/bannerTabletMobile.webp"
                className="slide-image--img"
                alt="iPad Pro 11"
              />
            </div>
          </div>
          <div className="slider-slide">
            <div className="slide-image">
              <img
                src="img/bannerWatchMobile.webp"
                className="slide-image--img"
                alt="Apple Watch Ultra"
              />
            </div>
          </div>
        </Slider>
      </MediaQuery>

      <MediaQuery minWidth={SCREEN_SIZES.tabletMin}>
        <Slider {...sliderSettings} arrows>
          <div className="slider-slide">
            <div className="slide-image">
              <img src="img/bannerIphoneDesktop.webp" alt="iPhone 14 Pro" />
            </div>
          </div>
          <div className="slider-slide">
            <div className="slide-image">
              <img src="img/bannerTabletDesktop.webp" alt="iPad Pro 11" />
            </div>
          </div>
          <div className="slider-slide">
            <div className="slide-image">
              <img src="img/bannerWatchDesktop.webp" alt="Apple Watch Ultra" />
            </div>
          </div>
        </Slider>
      </MediaQuery>
    </>
  );
};
