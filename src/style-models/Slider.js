import styled from "styled-components";
import { transition } from "./mixins/mixins";

export default styled.div`
  font-family: "Jura", sans-serif;
  color: #fff;
  position: relative;
  .slides-wrapper {
    display: flex;
    align-items: center;
    overflow-x: hidden;
  }
  .slider-item {
    padding-top: 170px;
    padding-bottom: 61px;
    min-height: 590px;
    min-width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    ${transition};
    /* transform: translateX(-400%); */
    .title {
      font-size: 41px;
      line-height: 48px;
      max-width: 600px;
      margin-bottom: 24px;
    }
    .descr {
      font-family: "Montserrat", sans-serif;
      font-size: 19px;
      line-height: 23px;
      max-width: 440px;
      margin-bottom: 39px;
    }
  }
  .button-wrapper {
    position: absolute;
    padding: 0 var(--fluid);
    bottom: 61px;
    height: 50px;
    z-index: 10;
    left: 0;
    min-width: 100%;
    .btn {
      position: absolute;
      z-index: 100;
      bottom: 0;
    }
    .prev {
      left: var(--fluid);
    }
    .next {
      right: var(--fluid);
    }
    .pagination {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      button {
        color: #fff;
        font-family: "Montserrat";
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        &.active {
          font-size: 0;
          width: 19px;
          height: 19px;
          background-color: #fff;
          border-radius: 50%;
          padding-bottom: 5px;
          line-height: 30px;
        }
      }
    }
    button {
      width: 48px;
      height: 48px;
      background-color: transparent;
      border: none;
      ${transition};
      &:hover {
        stroke: var(--red);
      }
    }
  }
  .slide-container {
    max-width: 1290px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
`;
