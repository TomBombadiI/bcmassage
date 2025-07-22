import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

const rootSelector = '[data-js-slider]';

class Slider {
  selectors = {
    root: rootSelector,
    swiper: '[data-js-slider-swiper]',
    navigation: '[data-js-slider-navigation="%s"]',
    prevButton: '[data-js-slider-previous-button]',
    nextButton: '[data-js-slider-next-button]',
    pagination: '[data-js-slider-pagination]',
    scrollbar: '[data-js-slider-scrollbar]',
  }

  rootElement: HTMLElement | null;
  navigationElement: HTMLElement | null;
  prevButtonElement: HTMLElement | null;
  nextButtonElement: HTMLElement | null;
  paginationElement: HTMLElement | null;

  sliderId: string;

  sliderParams: SwiperOptions;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this.sliderParams = JSON.parse(this.rootElement?.dataset.jsSwiperParams ?? '');

    this.sliderId = rootElement.id;
    this.selectors.navigation = this.selectors.navigation.replace('%s', this.sliderId);


    this.navigationElement = document.querySelector(this.selectors.navigation);

    this.prevButtonElement = this.navigationElement
      ? this.navigationElement.querySelector(this.selectors.prevButton)
      : this.rootElement!.querySelector(this.selectors.prevButton);

    this.nextButtonElement = this.navigationElement
      ? this.navigationElement.querySelector(this.selectors.nextButton)
      : this.rootElement!.querySelector(this.selectors.nextButton);

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
        modules: [Navigation, Pagination, Autoplay],
        navigation: {
          prevEl: this.prevButtonElement,
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
