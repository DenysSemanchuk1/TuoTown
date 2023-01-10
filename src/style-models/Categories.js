import styled from "styled-components";
import { transition } from "./mixins/mixins";

export default styled.section`
  padding-top: 60px;
  .categories {
    border-bottom: 2px dashed rgba(255, 255, 255, 0.4);
  }
  .categories-wrapper {
    display: flex;
    justify-content: space-around;
    padding-bottom: 50px;
    margin-left: -10px;
  }
  .category-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    background-color: transparent;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    color: rgba(255, 255, 255, 0.4);
    margin: 0 10px;
    ${transition}
    &.active, &:hover {
      color: var(--red);
    }
    img {
      margin-bottom: 30px;
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 480px;
    grid-auto-rows: 480px;
    gap: 18px 25px;
    padding-top: 20px;
  }
  .post {
    grid-column: 1 / 3;
  }

  @media (max-width: 992px) {
    .content {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 769px) {
    .content {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 450px;
      grid-auto-rows: 450px;
    }
    .category-btn {
      font-size: 14px;
    }
  }
  @media (max-width: 576px) {
    .content {
      grid-template-columns: 0.8fr !important;
      justify-content: center;
      grid-template-rows: 400px;
      grid-auto-rows: 400px;
    }
    .post {
      grid-column: 1 / 2;
    }
    .post__bottom {
      left: 0;
      padding-left: 10px;
      width: calc(100% - 20px);
    }
  }
  @media (max-width: 420px) {
    .content {
      grid-auto-rows: 350px;
      grid-template-rows: 350px ;
      grid-template-columns: 0.9fr ;
    }
    .product__img {
      height: 300px;
    }
    .category-btn {
      font-size: 10px;
    }
    .product__title {
      font-size: 18px;
    }
    
  }
`;
