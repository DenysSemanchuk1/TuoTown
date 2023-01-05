import React from "react";
import { useState } from "react";
import { Products } from "./Products";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";
import { selectProducts } from "../selectors/products/general_selectors";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { popularProducts, newProducts } = useSelector(selectProducts);
  return (
    <Wrapper>
      <div className='container-fluid'>
        <div className='tabs'>
          <button
            onClick={() => setActiveTab(0)}
            disabled={activeTab === 0}
            className={`${!activeTab && "active"}`}
          >
            Новинки
          </button>
          <button
            onClick={() => setActiveTab(1)}
            disabled={activeTab === 1}
            className={`${activeTab && "active"}`}
          >
            Популярное
          </button>
        </div>
        <div className='content'>
          {activeTab === 0 && <Products data={newProducts} />}
          {activeTab === 1 && <Products data={popularProducts} />}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 60px 0;
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    button {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 42px;
      text-transform: uppercase;
      color: #ffffff;
      background-color: transparent;
      border: none;
      &.active {
        border-bottom: 2px solid var(--red);
      }
      & + button {
        margin-left: 55px;
      }
    }
  }
`;
