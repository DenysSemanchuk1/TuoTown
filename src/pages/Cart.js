import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Cross } from "../assets/icons/cart/x.svg";
import { ReactComponent as Arrow } from "../assets/icons/cart/arrow-left.svg";
import styled from "styled-components";
import { transition } from "./../style-models/mixins/mixins";
import { Admit } from "./../components/Admit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../selectors/cart/cart";
import {
  calculateTotal,
  incrementItemTotal,
  removeItem,
} from "../features/cartSlice";
import { selectCartSlice } from "./../selectors/cart/cart";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cart = useSelector(selectCartSlice);
  useEffect(() => {
    dispatch(calculateTotal());
  }, []);
  return (
    <Wrapper>
      <h1 className='title'>Корзина</h1>
      <Link to='/catalog' className='catalog-link'>
        <Arrow />К покупкам
      </Link>
      {cartItems.length >= 1 ? (
        <section className='cart-elems'>
          {cartItems.map(({ _id, title, image, price, total }) => (
            <div key={_id} className='cart-item'>
              <div className='cart-item__data'>
                <div className='cart-item__img'>
                  <img src={image} alt={title} />
                </div>
                <div className='cart-item__title'>{title}</div>
              </div>
              <div className='cart-item__btns'>
                <div className='cart-item__amount'>
                  <input
                    min={1}
                    max={1000}
                    type='number'
                    value={total}
                    onChange={(e) => {
                      dispatch(
                        incrementItemTotal({ _id, value: e.target.value })
                      );
                      dispatch(calculateTotal());
                    }}
                  />
                </div>
                <div className='cart-item__price'>{price} р.</div>
                <button
                  className='cart-item__remove'
                  title='Remove Item'
                  onClick={() => dispatch(removeItem(_id))}
                >
                  <Cross />
                </button>
              </div>
            </div>
          ))}
          <div className='total'>
            К оплате:
            <div className='total__price'>{cart.totalPrice} р.</div>
          </div>
          <Link to='/checkout' className='btn'>
            Подтвердить покупку
          </Link>
        </section>
      ) : (
        <section className='cart-elems'>
          <div className='cart-empty'>
            <h2>Ваша коорзина пуста</h2>
            <Link to='/catalog'>В каталог</Link>
          </div>
        </section>
      )}
      <Admit />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 100px auto 0;
  position: relative;
  font-family: "Montserrat", sans-serif;
  max-width: 900px;
  font-weight: 400;
  padding: 0 25px;
  .title {
    text-align: center;
  }
  .catalog-link {
    position: absolute;
    left: 0;
    top: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 140%;
    color: #adacac;
    ${transition};
    &:hover {
      color: var(--red);
      path {
        fill: var(--red);
      }
    }

    svg {
      margin-right: 10px;
    }
  }
  .cart-elems {
    background-color: #232323;
    border-radius: 15px;
    padding-bottom: 100px;
    min-height: 200px;
    position: relative;
    .btn {
      position: absolute;
      left: 25px;
      bottom: 25px;
      width: auto;
      max-width: 230px;
    }
    .cart-empty {
      h2 {
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 20px;
      }
      a {
        color: rgba(255, 255, 255, 0.4);
        display: inline-block;
        ${transition};
        &:hover {
          color: var(--red);
        }
      }
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .cart-item {
    background: #303030;
    padding: 20px 25px 21px 25px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #4f4f4f;
    &__img {
      width: 70px;
      height: 70px;
      margin-right: 37px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__title {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
    &__amount {
      input {
        width: 40px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #adacac;
        color: #fff;
        font-family: Montserrat, sans-serif;
      }
      margin-right: 15px;
    }
    &__price {
      margin-right: 15px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
    &__remove {
      background-color: transparent;
      border: none;
      &:hover {
        path {
          fill: var(--red);
        }
      }
    }

    &__data,
    &__btns {
      display: flex;
      align-items: center;
    }
  }
  .total {
    position: absolute;
    right: 26px;
    bottom: 26px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #adacac;
    &__price {
      font-size: 24px;
      line-height: 28px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
`;
