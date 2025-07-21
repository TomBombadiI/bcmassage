import './Hero.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SwiperOptions } from 'swiper/types';

export default () => {
  const swiperParams: SwiperOptions = {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__slider swiper" data-js-slider data-js-swiper-params={JSON.stringify(swiperParams)}>
          <ul className="hero__slider-list swiper-wrapper" data-js-slider-swiper>
            <li className="hero__slider-item swiper-slide">Slide 1</li>
            <li className="hero__slider-item swiper-slide">Slide 2</li>
            <li className="hero__slider-item swiper-slide">Slide 3</li>
            <li className="hero__slider-item swiper-slide">Slide 4</li>
            <li className="hero__slider-item swiper-slide">Slide 5</li>
          </ul>
          <div className="hero__slider-pagination swiper-pagination" data-js-slider-pagination></div>
          <div className="hero__slider-button-prev swiper-button-prev" data-js-slider-previous-button></div>
          <div className="hero__slider-button-next swiper-button-next" data-js-slider-next-button></div>
        </div>
      </div>
    </section>
  )
}
