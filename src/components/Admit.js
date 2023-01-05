import React from "react";
import { Wrapper } from "../style-models/Admit";
export const Admit = () => {
  return (
    <Wrapper id="admit">
      <div className='container-fluid'>
        <div className='admit-inner'>
          <h2 className='title'>Узнавайте первым о новинках и новостях</h2>
          <form>
            <label className='email-wrapper'>
              <input type='email' placeholder='Ваш e-mail' />
              <button type='submit' className='submit-btn'>
                <svg
                  width='8'
                  height='12'
                  viewBox='0 0 8 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.75 10.5L6.25 6L1.75 1.5'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </label>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
