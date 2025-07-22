import menuItems from '@/data/menuItems'
import './Footer.scss'
import { Icon } from 'minista'

import tgLogo from '@/assets/icons/tg.svg';
import vkLogo from '@/assets/icons/vk.svg';


export default () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__group">
          <h3 className="footer__group-title h4">Меню</h3>
          <div className="footer__group-body">
            <nav className="footer__menu">
              <ul className="footer__menu-list">
                {menuItems.map((menuItem, index) => (
                  <li className="footer__menu-item" key={index}>
                    <a href={menuItem.href} className="footer__menu-link">{menuItem.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer__group">
          <h3 className="footer__group-title h4">Контакты</h3>
          <div className="footer__group-body">
            <div className="footer__contacts">
              <a className="footer__contacts-item" href='tel:+79124088528'>+7 (912) 408-85-28</a>
              <a className="footer__contacts-item" href='mailto:biokinetika@yandex.ru'>biokinetika@yandex.ru</a>
              <p className="footer__contacts-item">
                ИП Шлыков Александр Андреевич <br />
                ОГРНИП 313502715000020
              </p>
            </div>
          </div>
        </div>

        <div className="footer__group">
          <h3 className="footer__group-title h4">Соц. сети</h3>
          <div className="footer__group-body">
            <div className="footer__soc1als">
              {/* <a className="footer__contacts-item" href='https://t.me/bchmshkola'>
                <Icon name='tg' size={44} hasFill />
              </a>
              <a className="footer__contacts-item" href='https://vk.com/bc_massage'>
                <Icon name='vk' size={40} hasFill  />
              </a> */}
              <a
                className="footer__contacts-item"
                href='https://t.me/bchmshkola'
                title='телеграм канал'
                aria-label='Телеграм канал'
              >
                <img src={tgLogo} width={44} height={44} alt="" />
              </a>
              <a
                className="footer__contacts-item"
                href='https://vk.com/bc_massage'
                title='Группа ВК'
                aria-label='Группа ВК'
              >
                <img src={vkLogo} width={44} height={44} alt="" />
              </a>
            </div>
            <div id="vk_groups"></div>
          </div>
        </div>

      </div>
    </footer>
  )
}
