import MicroModal from 'micromodal';

class PopupCollection {
  constructor() {
    MicroModal.init({
      disableScroll: true,
      awaitCloseAnimation: true,
      awaitOpenAnimation: true,
    });
  }
}

export default PopupCollection;


