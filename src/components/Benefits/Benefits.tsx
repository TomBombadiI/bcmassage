import clsx from 'clsx';
import './Benefits.scss';
import { TBenefitsProps } from './types';
import benefits from './data';
import { Image } from 'minista';
import Button from '../Button';

export default (props: TBenefitsProps) => {
  const {
    className
  } = props;

  return (
    <div className={clsx('benefits', className)}>
      <ul className="benefits__list">
        {benefits.map(({ label, imageSrc }, index) => (
          <li className="benefits__item" key={index}>
            <img className='benefits__item-image' src={imageSrc} alt='' />
            <h3 className="benefits__item-text h6">{label}</h3>
          </li>
        ))}
      </ul>
      <Button>
        Заявка на участие
      </Button>
    </div>
  )
}
