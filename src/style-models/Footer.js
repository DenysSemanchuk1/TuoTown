import styled from "styled-components";
export default styled.div`
  background: #272727;
  margin-left: 15px;
  padding: 35px 0 44px 0;
  .title {
    font-weight: 600;
    font-size: 17px;
    line-height: 28px;
    margin-bottom: 15px;
  }
  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
  }
  .footer-descr {
    max-width: 370px;
    .footer-descr__logo {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      font-size: 13px;
      line-height: 17px;
      margin-bottom: 30px;
      p {
        max-width: 160px;
      }
    }
    .footer-descr__text {
      font-size: 13px;
      line-height: 20px;
    }
  }
  .footer-nav {
    max-width: 385px;
    .footer__menu {
      margin-bottom: 35px;
      & + .footer__menu {
        margin-bottom: 65px;
      }
      ul {
        list-style-type: none;
      }
      li {
        display: inline-block;
        a {
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          text-decoration: none;
          opacity: 0.5;
        }
        & + li a {
          padding-left: 20px;
        }
      }
    }
    .footer__social {
      display: flex;
      align-items: center;
      .title {
        margin-right: 15px;
        margin-bottom: 0;
      }
      span {
        display: inline-block;
      }
    }
  }
  .footer-contacts {
    font-size: 14px;
    line-height: 19px;
    max-width: 280px;
    .title {
      margin-bottom: 23px;
    }
    a {
      display: block;
      font-family: "Montserrat";
    }
    .phone {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 10px;
    }
    .email {
      margin-bottom: 30px;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
    }
    .schedule {
      margin-bottom: 20px;
    }
    .address {
      margin-bottom: 25px;
    }
  }
  @media (max-width: 1200px) {
    .footer__wrapper {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .footer__item {
      min-width: 100%;
      margin-bottom: 27px;
    }
    .footer-descr__logo {
      max-width: 320px;
    }
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
  @media (max-width: 400px) {
    .footer__social {
      display: block !important;
      span {
        display: block !important;
        &.title {
          margin-bottom: 10px !important;
        }
      }
    }
    .footer__menu {
      li {
        display: block !important;
        a {
          padding: 5px 0 5px 0 !important;
        }
      }
    }
  }
`;
