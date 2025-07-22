import './Hero.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SwiperOptions } from 'swiper/types';

import slide1 from '@/assets/images/slides/1.jpg';
import slide2 from '@/assets/images/slides/2.jpg';
import { Image } from 'minista';

import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default () => {
  const swiperParams: SwiperOptions = {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }

  const titleId = 'hero-title';

  return (
    <section className="hero" aria-labelledby={titleId}>
      <div className="hero__inner container">
        <h1 className='hero__title' id={titleId}>
          Мягкие мануальные техники и холистический
          подход для массажистов
        </h1>
        <div className="hero__slider swiper" data-js-slider data-js-swiper-params={JSON.stringify(swiperParams)}>
          <ul className="hero__slider-list swiper-wrapper" data-js-slider-swiper>
            <li className="hero__slider-item swiper-slide">
              <Image src={slide1} data-fancybox="hero-slider" />
            </li>
            <li className="hero__slider-item swiper-slide">
              <Image src={slide2} data-fancybox="hero-slider" />
            </li>
          </ul>
          <div className="hero__slider-pagination swiper-pagination" data-js-slider-pagination></div>
          <div className="hero__slider-button-prev swiper-button-prev" data-js-slider-previous-button></div>
          <div className="hero__slider-button-next swiper-button-next" data-js-slider-next-button></div>
        </div>
      </div>
    </section>
  )
}
