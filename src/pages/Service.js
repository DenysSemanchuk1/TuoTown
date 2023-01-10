import styled from "styled-components";
import { Admit } from "../components/Admit";
import { transition } from "./../style-models/mixins/mixins";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setValue } from "../features/serviceSlice";
export const Service = () => {
  const { theme, name, email, tel, message } = useSelector(
    (store) => store.service
  );
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setValue({ name, value }));
  };
  return (
    <Wrapper>
      <div className='container-fluid'>
        <h1 className='title'>СЕРВИС</h1>
        <a href='tel:+79811201117' className='tel'>
          +7 (981) 120-11-17
        </a>
        <form className='service-form'>
          <div className='service-form__inner'>
            <div className='service-form__item'>
              <label htmlFor='theme'>Тема</label>
              <select name='theme' id='theme' value={theme} onChange={handleChange}>
                <option value='break-knife'>Неполадки с ножом</option>
                <option value='break-knife'>Неполадки с ножом</option>
                <option value='break-knife'>Неполадки с ножом</option>
                <option value='break-knife'>Неполадки с ножом</option>
              </select>
            </div>
            <div className='service-form__item'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                onChange={handleChange}
                id='email'
                placeholder='Ваша почта'
                value={email}
              />
            </div>
            <div className='service-form__item req'>
              <label htmlFor='name'>Имя</label>
              <input
                type='text'
                name='name'
                onChange={handleChange}
                id='name'
                placeholder='Алексей '
                value={name}
              />
            </div>
            <div className='service-form__item req'>
              <label htmlFor='tel'>Телефон</label>
              <input
                type='tel'
                name='tel'
                onChange={handleChange}
                id='tel'
                placeholder='+7 (___) ___-__-__'
                value={tel}
              />
            </div>
            <div className='service-form__item message-input'>
              <label htmlFor='message'>Комментарий</label>
              <textarea
                name='message'
                onChange={handleChange}
                id='message'
                placeholder='Впишите ваше сообщение....'
                value={message}
              />
            </div>
          </div>
          <button className='submit-btn'>отправить</button>
        </form>
      </div>
      <Admit />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;
  padding-top: var(--pt);
  .tel {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    font-family: "Monterrat", sans-serif;
    margin-bottom: 30px;
    display: inline-block;
  }
  .service-form {
    background: #ffffff;
    border-radius: 15px;
    padding: 50px 0;
    .submit-btn {
      padding: 16px 34px;
      font-family: "Montserrat";
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      text-transform: uppercase;
      color: #000;
      background-color: transparent;
      border: 2px solid var(--red);
      border-radius: 27px;
      ${transition}
      &:hover {
        background-color: var(--red);
        color: #fff;
      }
    }
  }

  .service-form__inner {
    display: grid;
    grid-template-columns: repeat(2, 370px);
    grid-template-rows: repeat(4, 100px);
    gap: 20px;
    max-width: 755px;
    width: 100%;
    margin: 0 auto;
    text-align: left;
  }

  .service-form__item {
    background: #f7f7f7;
    border-radius: 5px;
    padding: 15px 20px;
    position: relative;

    label {
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #4f4f4f;
      opacity: 0.87;
      display: block;
      margin-bottom: 10px;
    }
    input,
    select {
      width: 100%;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid #4f4f4f;
      padding-bottom: 5px;
    }
    &.message-input {
      grid-column: 1 / 3;
      grid-row-start: 3;
      grid-row-end: 5;
      background-color: transparent;
      padding: 0;
      label {
        margin-left: 20px;
      }
    }
    textarea {
      width: 100%;
      background-color: transparent;
      border: none;
      resize: none;
      background-color: #f7f7f7;
      border-radius: 5px;
      min-height: 180px;
      padding: 15px 23px;
    }
  }
  .req::before {
    content: "*";
    color: var(--red);
    position: absolute;
    top: 45px;
    right: 40px;
    font-size: 20px;
    display: block;
    z-index: 100000;
  }
`;
