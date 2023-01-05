import styled from "styled-components";
import knives from "../assets/img/home_page/slider_img.png";
export const PrimaryProduct = ({ image, title, text, price }) => {
  return (
    <Wrapper className='primary' style={{ backgroundImage: `url(${knives})` }}>
      <div className='container'>
        <div className='primary__inner'>
          <img src={image} alt={title} />
          <div className='primary__title'>{title}</div>
          <div className='primary__bottom'>
            <span className='price'>{price} р.</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  font-family: "Montserrat", sans-serif;
  padding: 160px 0 0 0;
  min-height: 590px;
  position: relative;
  .primary__title {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    text-transform: uppercase;
  }
  .primary__descr {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 20px;
  }
  .primary-btn {
    padding: 16px 34px;
    width: 165px;
    background: #c80000;
    border: 2px solid #c80000;
    border-radius: 27px;
    color: #fff;
    margin-right: 30px;
  }
  .price {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
  }
  .primary__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.4);
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    color: #232323;
  }
`;
