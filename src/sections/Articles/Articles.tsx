import './Articles.scss';
import ArticleCard from '@/components/ArticleCard';
import './Articles';
import { TArticlesProps } from './types';
import { SwiperOptions } from 'swiper/types';

export default (props: TArticlesProps) => {
  const {
    id,
    items,
  } = props;

  const swiperParams: SwiperOptions = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2
      }
    }
  }

  return (
    <div id={id} className="articles swiper" data-js-slider data-js-swiper-params={JSON.stringify(swiperParams)}>
      <ul className="articles__list swiper-wrapper">
        {items.map((item, index) => (
          <li className="articles__item swiper-slide" key={index}>
            <ArticleCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
