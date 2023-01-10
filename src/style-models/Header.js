import styled from "styled-components";
import { transition } from "./mixins/mixins";

export default styled.header`
  background: rgba(21, 21, 21, 0.9);
  height: 71px;
  padding: 18px 0;
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  width: 100%;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart-btn {
    display: none;
  }
  .dots-btn {
    padding-left: 0;
  }
  a,
  button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0 15px;
    display: inline-block;
    text-align: center;
    &:hover path,
    &:hover circle {
      stroke: var(--red);
    }

    svg {
      path,
      circle {
        ${transition}
      }
      height: 24px;
      width: 24px;
    }
  }
  .phone {
    svg {
      display: none;
    }
    &:hover {
      color: var(--red);
    }
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    text-decoration: none;
    ${transition}
  }
  @media (max-width: 768px) {
    .phone {
      font-size: 0;
      svg {
        display: inline-block;
      }
    }
    position: static;
  }
  @media (max-width: 576px) {
    .right {
      display: none;
    }
    .map-btn {
      display: none;
    }
    .cart-btn {
      display: inline-block;
    }
  }
  .center {
    padding-right: 0;
    img {
      width: 100px;
    }
  }
`;
