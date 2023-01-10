import styled from "styled-components";
export const Wrapper = styled.section`
  padding: 50px 0;
  .admit-inner {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 27px;
    line-height: 42px;
    color: #ffffff;
    margin-bottom: 17px;
  }
  .email-wrapper {
    position: relative;
  }
  input {
    width: 276px;
    height: 59px;
    background: #272727;
    border-radius: 6px;
    padding: 20px 26px;
    border: none;
    display: inline-block;
    color: rgba(255, 255, 255);
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 15px;
    &::placeholder {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #ffffff;
      opacity: 0.5;
    }
  }
  .submit-btn {
    position: absolute;
    right: 25px;
    top: 60%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 630px) {
    text-align: center;
  }
`;
