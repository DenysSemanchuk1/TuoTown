import React from "react";
import logo from "../assets/img/logo.png";
import vk from "../assets/icons/social/vk.svg";
import youtube from "../assets/icons/social/youtube.svg";
import instagramm from "../assets/icons/social/instagramm.svg";
import facebook from "../assets/icons/social/facebook.svg";
import polytics from "../assets/icons/social/footer-img.png";
import supportLogo from "../assets/img/support-logo.png";
import Wrapper from "../style-models/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHandleFilter } from "./../hooks/useHandleFilter";
export const Footer = () => {
  const handleFilter = useHandleFilter();
  return (
    <footer className='bg'>
      <Wrapper>
        <div className='container-fluid'>
          <div className='footer__wrapper'>
            <div className='footer-descr footer__item'>
              <div className='footer-descr__logo'>
                <img src={logo} alt='footer logo' />
                <p>легендарные ножи, создающие шедевры</p>
              </div>
              <p className='footer-descr__text'>
                Компания «Tuotown» – эксклюзивный представитель профессиональных
                кухонных ножей, изготовленных лучшими мастерами Восточной Азии
                с применением передового европейского оборудования и современных
                материалов.
                <br />
                <br /> Они отличаются идеальным балансом и фантастической
                остротой. Сочетают в себе вековые традиции и новейшие
                разработки. Также предлагаем широкий ассортимент сопутствующих
                товаров.
              </p>
            </div>
            <div className='footer-nav footer__item'>
              <div className='footer__menu'>
                <div className='title'>Информация</div>
                <ul>
                  <li>
                    <a href='https://inlnk.ru/XOXd1a'>Главная</a>
                  </li>
                  <li>
                    <a href='https://inlnk.ru/XOXd1a'>Новости</a>
                  </li>
                  <li>
                    <a href='https://inlnk.ru/XOXd1a'>О компании</a>
                  </li>
                  <li>
                    <a href='https://inlnk.ru/XOXd1a'>Контакты</a>
                  </li>
                </ul>
              </div>
              <div className='footer__menu footer__item'>
                <div className='title'>Каталог</div>
                <ul className='footer__menu-filter' onClick={handleFilter}>
                  <li>
                    <Link to='/catalog/kitchen' data-filter='kitchen'>
                      Кухонные ножи
                    </Link>
                  </li>
                  <li>
                    <Link to='/catalog/folding' data-filter='folding'>
                      Складные ножи
                    </Link>
                  </li>
                  <li>
                    <Link to='/catalog/sharpener' data-filter='sharpener'>
                      Точилки для ножей
                    </Link>
                  </li>
                  <li>
                    <Link to='/catalog/accessories' data-filter='accessories'>
                      Аксессуары
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='footer__social footer__item'>
                <span className='title'>Мы в соцсетях</span>
                <span className='btns-container'>
                  <a href='https://www.facebook.com/tuotown/'>
                    <img src={facebook} alt='facebook' />
                  </a>
                  <a href='https://vk.com/tuotown'>
                    <img src={vk} alt='vk' />
                  </a>
                  <a href='https://www.instagram.com/tuotown/?hl=en'>
                    <img src={instagramm} alt='instagramm' />
                  </a>
                  <a href='https://www.youtube.com/@tuotownkinfe921'>
                    <img src={youtube} alt='youtube' />
                  </a>
                </span>
              </div>
            </div>
            <div className='footer-contacts footer__item'>
              <div className='title'>Контактная информация</div>
              <a href='tel:+79811201117' className='phone'>
                +7 (981) 120-11-17
              </a>
              <a href='mailto:tuotown@mail.ru' className='email'>
                tuotown@mail.ru
              </a>
              <div className='schedule'>08:00 — 18:00, ежедневно</div>
              <div className='address'>
                Россия, Москва, МКАД, 19-й километр, вл20с1, вход Ф, 22-68-70
              </div>
              <a
                href='https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size'
                className='footer-polytics'
              >
                <img src={polytics} alt='footer polytics' />
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className='container-fluid'>
        <FooterBottom>
          <p>
            TUOTOWN © {new Date().getFullYear()} Торговая марка TUOTOWN
            зарегистрирована. Все права защищены и принадлежат правообладателям.
          </p>
          <img src={supportLogo} alt='support logo' />
        </FooterBottom>
      </div>
    </footer>
  );
};

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 20px 0 25px 0;
  p {
    font-size: 12px;
    line-height: 21px;
    color: #ffffff;
    opacity: 0.5;
  }
  @media (max-width: 630px) {
    p {
      display: none;
    }
  }
`;
