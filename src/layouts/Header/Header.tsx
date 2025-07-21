import Logo from '@/components/Logo'
import './Header.scss'
import type { THeaderProps } from './types'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'

export default (props: THeaderProps) => {
  const { url } = props

  const menuItems = [
    {
      label: 'О курсе',
      href: '/'
    },
    {
      label: 'О ведущем',
      href: '/'
    },
    {
      label: 'Новости',
      href: '/'
    },
    {
      label: 'Программа',
      href: '/'
    },
    {
      label: 'Расписание',
      href: '/'
    },
    {
      label: 'Отзывы',
      href: '/'
    },
    {
      label: 'Материалы',
      href: '/'
    },
    {
      label: 'Контакты',
      href: '/'
    },
    {
      label: 'Реестр специалистов',
      href: '/'
    },
    {
      label: 'Документы',
      href: '/'
    },
  ]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <div className="header__top">
          <Logo className='header__logo' loading='eager' />
          <div className="header__contacts hidden-mobile">
            <a className='header__phone' href="tel:+79124088528">+7 (912) 408-85-28</a>
            <Button className='header__button' type='button'>
              Заявка на участие
            </Button>
          </div>
          <BurgerButton
            className='header__burger-button visible-mobile'
            extraAttrs={
              { 'data-js-overlay-menu-burger-button': '' }
            } />
        </div>
        <div className="header__bottom">
          <dialog className="header__overlay-menu" data-js-overlay-menu-dialog="">
            <nav className="header__overlay-menu-nav">
              <div className="header__overlay-menu-contacts visible-mobile">
                <a className='header__phone' href="tel:+79124088528">+7 (912) 408-85-28</a>
                <Button className='header__button' type='button'>
                  Заявка на участие
                </Button>
              </div>
              <ul className="header__overlay-menu-list">
                {menuItems.map(({ label, href }, index) => (
                  <li className="header__overlay-menu-item" key={index}>
                    <a className='header__overlay-menu-link' href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </dialog>
        </div>
      </div>
    </header>
  )
}
