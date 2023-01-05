import React from "react";
import styled from "styled-components";
import advantagesImage1 from "../assets/img/product-page/advantages-1.jpg";
import advantagesImage2 from "../assets/img/product-page/advantages-2.jpg";
import { Admit } from "../components/Admit";
import { advantagesSection } from "../style-models/mixins/mixins";

export const Map = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='title'>Карта</div>
      </div>
      <section className='map'>
        <div className='container'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128204.00671676498!2d29.903884394531257!3d59.862630999999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963a4589feb1df%3A0xfc308617d7a20e38!2z0J3QvtC20LhNQU4g0L3QvtC20LXQstC-0Lkg0LzQsNCz0LDQt9C40L0!5e0!3m2!1sen!2sfr!4v1672493029845!5m2!1sen!2sfr'
            width='100%'
            height='771'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
      <section className='advantages'>
        <div className='container'>
          <div className='advantages__inner'>
            <img src={advantagesImage1} alt='knife' />
            <div className='advantages__descr'>
              <div className='advantages__text right'>
                <h3>Исключительное качество без компромиссов</h3>
                <p>
                  Ножи «Tuotown» — это главный инструмент поваров и секрет
                  кулинарного мастерства
                </p>
              </div>
            </div>
          </div>
          <div className='advantages__inner'>
            <div className='advantages__descr'>
              <div className='advantages__text left'>
                <h3>Исключительное качество без компромиссов</h3>
                <p>
                  Ножи «Tuotown» — это главный инструмент поваров и секрет
                  кулинарного мастерства
                </p>
              </div>
            </div>
            <img src={advantagesImage2} alt='knife' />
          </div>
        </div>
      </section>
      <Admit />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: var(--pt);
  font-family: "Montserrat", sans-serif;
  .title {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    text-transform: uppercase;
    margin-bottom: 30px;
    text-align: center;
  }
  .map {
    padding-top: 30px;
    background-color: #272727;
  }
  ${advantagesSection};
`;
