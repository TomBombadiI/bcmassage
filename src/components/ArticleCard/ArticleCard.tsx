import { Image } from 'minista';
import './ArticleCard.scss';
import { TArticleCardProps } from './types';
import Button from '../Button';

export default (props: TArticleCardProps) => {
  const {
    title,
    description,
    link = '#',
    imageSrc = 'images/articles/thumbnail.png'
  } = props;

  return (
    <div className='article-card'>
      <div className="article-card__body">
        <h3 className="article-card__title h4">
          <a className='article-card__link' href={link}>{title}</a>
        </h3>
        <div className="article-card__description">
          {description}
        </div>
        <Button className='article-card__more' href={link}>Подробнее</Button>
      </div>
      <a className="article-card__image" href={link}>
        <img src={imageSrc} width={200} height={200} alt='' />
      </a>
    </div>
  )
}
