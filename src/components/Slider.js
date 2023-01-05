import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/img/home_page/slider_img.png";
import { ReactComponent as Prev } from "../assets/icons/slider/prev.svg";
import { ReactComponent as Next } from "../assets/icons/slider/next.svg";
import Wrapper from "../style-models/Slider";
const data = [
  {
    _id: 1,
    image,
    link: "https://google.com",
    text: "1Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства",
    title: "Исключительное качество без компромиссов",
  },
  {
    _id: 2,
    image,
    link: "https://google.com",
    text: "2Mults",
    title: "Исключительное качество без компромиссов",
  },
  {
    _id: 3,
    image,
    link: "https://google.com",
    text: "3Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства",
    title: "Исключительное качество без компромиссов",
  },
  {
    _id: 4,
    image,
    link: "https://google.com",
    text: "4Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства",
    title: "Исключительное качество без компромиссов",
  },
];
export const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };
  const prevSlide = () => {
    setActiveSlide(activeSlide - 1);
  };
  return (
    <Wrapper className='slider-container'>
      <div className='slides-wrapper'>
        {data.map(({ image, title, text, link, _id }, index) => (
          <div
            key={_id}
            className='slider-item'
            style={{
              backgroundImage: `url("${image}")`,
              transform: `translateX(-${activeSlide * 100}%)`,
            }}
          >
            <div className='slide-container'>
              <h3 className='title'>{title}</h3>
              <p className='descr'>{text}</p>
              <Link to={link} className='btn'>
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='button-wrapper'>
        <button
          onClick={prevSlide}
          className='prev btn'
          disabled={activeSlide === 0}
        >
          <Prev />
        </button>
        <div className='pagination'>
          {Array.from({ length: data.length }).map((_, index) => (
            <button
              className={`${index === activeSlide && "active"}`}
              disabled={index === activeSlide}
              onClick={() => setActiveSlide(index)}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={nextSlide}
          disabled={activeSlide === data.length - 1}
          className='next btn'
        >
          <Next />
        </button>
      </div>
    </Wrapper>
  );
};
