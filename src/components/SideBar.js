import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { closeSidebar } from "../features/sideBarSlice";
import { transition } from "./../style-models/mixins/mixins";
import { useHandleFilter } from "./../hooks/useHandleFilter";

export const SideBar = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.sidebar);
  const handleFilter = useHandleFilter();
  return (
    <Wrapper style={{ transform: `translateX(${!state ? "-200%" : "0"})` }}>
      <button className='close' onClick={() => dispatch(closeSidebar())}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
          <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
        </svg>
      </button>
      <ul className='categories' onClick={handleFilter}>
        <li>
          <Link to='/catalog/kitchen' data-filter='kitchen'>
            Кухонные ножи TUOTOWN
          </Link>
        </li>
        <li>
          <Link to='/catalog/sharpener' data-filter='sharpener'>
            Точильные камни
          </Link>
        </li>
        <li>
          <Link to='/catalog/folding' data-filter='folding'>
            Складные ножи TUOTOWN
          </Link>
        </li>
      </ul>
      <nav>
        <ul>
          <li>
            <Link to='/'>Главная</Link>
          </li>
          <li>
            <Link to='/catalog'>Каталог</Link>
          </li>
          <li>
            <Link to='/service'>Помощь</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  font-family: Montserrat, sans-serif;
  position: fixed;
  top: 0;
  z-index: 10000;
  width: 444px;
  height: 100%;
  background: rgba(39, 39, 39, 0.95);
  box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.72);
  padding: 46px 25px 25px 45px;
  left: 0;
  ${transition};
  a {
    font-weight: 600;
  }
  .close {
    width: 12px;
    height: 25px;

    background-color: transparent;
    border: none;
    margin-bottom: 50px;
    path {
      fill: #fff;
    }
  }
  .categories {
    margin-bottom: 50px;
    a {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      text-transform: uppercase;
    }
    li + li {
      margin-top: 30px;
    }
  }
  nav {
    a {
      font-size: 15px;
      line-height: 18px;
      text-transform: uppercase;
      opacity: 0.6;
    }
    li + li {
      margin-top: 20px;
    }
  }

  @media  (max-width: 420px) {
    width: 100%;
    padding: 10px;
  }
`;
