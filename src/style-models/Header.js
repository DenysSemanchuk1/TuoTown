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
  a, button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    width: 58px;
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
    &:hover {
      color: var(--red);
    }
    font-family: "Jura";
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    text-decoration: none;
    ${transition}
  }
`;
