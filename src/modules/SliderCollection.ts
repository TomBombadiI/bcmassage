import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

const rootSelector = '[data-js-slider]';

class Slider {
  selectors = {
    root: rootSelector,
    swiper: '[data-js-slider-swiper]',
    navigation: '[data-js-slider-navigation]',
    previousButton: '[data-js-slider-previous-button]',
    nextButton: '[data-js-slider-next-button]',
    pagination: '[data-js-slider-pagination]',
    scrollbar: '[data-js-slider-scrollbar]',
  }

  rootElement: HTMLElement | null;
  swiperElement: HTMLElement | null;
  previousButtonElement: HTMLElement | null;
  nextButtonElement: HTMLElement | null;
  paginationElement: HTMLElement | null;

  sliderParams: SwiperOptions;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this.swiperElement = this.rootElement.querySelector(this.selectors.swiper);
    this.sliderParams = JSON.parse(this.rootElement?.dataset.jsSwiperParams ?? '');
    this.previousButtonElement = this.rootElement!.querySelector(this.selectors.previousButton);
    this.nextButtonElement = this.rootElement!.querySelector(this.selectors.nextButton);
    this.paginationElement = this.rootElement!.querySelector(this.selectors.pagination);

    this.init();
  }

  init() {
    if (!this.rootElement) {
      return;
    }

    new Swiper(
      this.rootElement,
      {
        ...this.sliderParams,
        modules: [Navigation, Pagination],
        navigation: {
          prevEl: this.previousButtonElement,
          nextEl: this.nextButtonElement,
        },
        pagination: {
          el: this.paginationElement,
        }
      });
  }
}

class SliderCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element as HTMLElement);
    });
  }
}

export default SliderCollection;
