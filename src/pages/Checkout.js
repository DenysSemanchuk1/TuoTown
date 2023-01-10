import { Link } from "react-router-dom";
import styled from "styled-components";
import { Admit } from "../components/Admit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setValue } from "../features/checkoutSlice";
export const Checkout = () => {
  const { name, tel, email } = useSelector((store) => store.checkout);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(setValue({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className='container'>
        <Wrapper>
          <div className='title'>
            Для подтверждения заказа - введите ваши данные и мы перезвоним вам
          </div>
          <form onSubmit={handleSubmit}>
            <div className='form-inner'>
              <div className='form-left'>
                <div className='form__item req'>
                  <label htmlFor='name'>Получатель</label>
                  <input
                    onChange={handleChange}
                    type='text'
                    id='name'
                    placeholder='Имя Фамилия'
                    value={name}
                    name='name'
                    required
                  />
                </div>
                <div className='form__item req'>
                  <label htmlFor='tel'>Мобильный телефон</label>
                  <input
                    onChange={handleChange}
                    
                    type='tel'
                    id='tel'
                    placeholder='+7 (___) ___-__-__'
                    value={tel}
                    name='tel'
                    required
                  />
                </div>
                <div className='form__item'>
                  <label htmlFor='email'>E-mail</label>
                  <input
                    onChange={handleChange}
                    type='email'
                    id='email'
                    placeholder='Ваша почта'
                    value={email}
                    name='email'
                  />
                </div>
              </div>
              <div className='form-right'>
                <p>
                  Нажимая «Выбрать способ доставки», подтверждаю, что я
                  ознакомлен с условиями{" "}
                  <Link to='/12'>Публичного договора оферты</Link> и{" "}
                  <Link to='/13'>Политикой конфиденциальности</Link>, а также
                  согласен получать информационную рассылку
                </p>
                <button type='submit' className='btn'>
                  Отправить форму
                </button>
              </div>
            </div>
          </form>
        </Wrapper>
      </div>
      <Admit />
    </>
  );
};

const Wrapper = styled.main`
  background: #232323;
  border-radius: 15px;
  padding: 60px 20px 60px 40px;
  max-width: 850px;
  margin: 80px auto 0px auto;
  .form-inner {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .form-left {
    width: 40%;
  }
  .form-right {
    width: 50%;
    p {
      margin-bottom: 20px;
    }
    a {
      color: var(--red);
    }
  }
  .form__item {
    background: #f7f7f7;
    border-radius: 5px;
    padding: 15px 20px;
    position: relative;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    label {
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #4f4f4f;
      opacity: 0.87;
      display: block;
      margin-bottom: 10px;
      position: relative;
    }
    input {
      width: 100%;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid #4f4f4f;
      padding-bottom: 5px;
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
