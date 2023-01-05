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
  }
  .category-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    color: rgba(255, 255, 255, 0.4);
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
`;
