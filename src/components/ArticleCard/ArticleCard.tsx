import { Image } from 'minista';
import './ArticleCard.scss';
import { TArticleCardProps } from './types';
import thumbnail from '@/assets/images/articles/thumbnail.png';
import Button from '../Button';

export default (props: TArticleCardProps) => {
  const {
    title,
    description,
    link = '#',
    imageSrc = thumbnail
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
        <Image src={imageSrc} width={200} height={200} />
      </a>
    </div>
  )
}
