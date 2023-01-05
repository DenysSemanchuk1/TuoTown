import primaryBg from "../assets/img/categories-primary.jpg";
import styled from "styled-components";

export const Primary = () => {
  return (
    <Wrapper
      className='primary'
      style={{ backgroundImage: `url(${primaryBg})` }}
    >
      <div className='container' style={{ position: "static" }}>
        <div className='primary-inner'>
          <div className='primary-title'>
            <h1 className='title'>Дом и Ножи</h1>
            <p>Эксклюзивные технологии на страже чистоты и уюта в вашем доме</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 610px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Montserrat";
  .primary-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
