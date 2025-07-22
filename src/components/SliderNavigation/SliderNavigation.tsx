import Button from '../Button';
import Icon from '../Icon';
import './SliderNavigation.scss';
import { TSliderNavigation } from './types';

export default (props: TSliderNavigation) => {
  const { sliderId } = props;

  return (
    <div className="slider-navigation" data-js-slider-navigation={sliderId}>
      <Button className='slider-navigation__button' data-js-slider-previous-button="" aria-label='Назад' title='Назад'>
        <Icon name='arrow-left' hasFill />
      </Button>
      <Button className='slider-navigation__button' data-js-slider-next-button="" aria-label='Вперед' title='Вперед'>
        <Icon name='arrow-right' hasFill />
      </Button>
    </div>
  );
}
