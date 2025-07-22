import './Popup.scss';
import { TPopupProps } from './types';

export default (props: TPopupProps) => {
  const {
    popupName,
    title,
    children
  } = props;

  const titleId = popupName + '-title';

  return (
    <div className="popup" id={popupName} aria-hidden>
      <div
        className='popup__overlay'
        tabIndex={-1}
        data-micromodal-close=""
      >
        <div
          className="popup__container"
          role='dialog'
          aria-modal
          aria-labelledby={titleId}
        >
          <header className="popup__header">
            <h2 className="popup__title" id={titleId}>{title}</h2>
            <button
              className="popup__close"
              aria-label="Закрыть"
              data-micromodal-close
            ></button>
          </header>
          <div className="popup__content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
