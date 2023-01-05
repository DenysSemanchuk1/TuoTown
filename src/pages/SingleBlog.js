import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { selectBlogSingleItem } from "./../selectors/blog/blog";

export const SingleBlog = () => {
  const { id } = useParams();
  const item = useSelector((store) => selectBlogSingleItem(store, id));
  const { title, text, image, date } = item;
  return (
    <Wrapper>
      <div className='container'>
        <h1 className='title'>{title}</h1>
        <div className='content'>
          <div className='img' style={{ backgroundImage: `url(${image})` }} />
          <div className='descr'>
            <div className='time'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                <path d='M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z' />
              </svg>
              {date}
            </div>
            <p className='text'>{text}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: var(--pt) 0;
  font-family: Montserrat, sans-serif;

  .title {
    text-align: center;
  }
  .img {
    float: left;
    width: 40%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: 20px;
    min-height: 450px;
  }
  .time {
    margin-bottom: 30px;
    svg {
      width: 15px;
      height: 15px;
      fill: #fff;
      margin-right: 8px;
    }
  }
  .text {
    font-size: 18px;
    
  }
`;
