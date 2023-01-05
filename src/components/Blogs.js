import styled from "styled-components";
import { Link } from "react-router-dom";
import { transition } from "./../style-models/mixins/mixins";

import { ReactComponent as Arrow } from "../assets/icons/categories/arrow.svg";
import { useSelector } from "react-redux/es/exports";
import { selectBlogSlice } from "./../selectors/blog/blog";

export const Blogs = ({ cols }) => {
  const blogs = useSelector(selectBlogSlice);
  return (
    <Wrapper className={`col-${cols}`}>
      {(cols !== 2 ? blogs.slice(0, 3) : blogs).map(
        ({ _id, image, title, time }) => {
          return cols !== 2 ? (
            <Link
              key={_id}
              to={`blog/${_id}`}
              className='blog-item'
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className='blog-title'>{title}</div>
              <div className='blog-time'>{time}</div>
            </Link>
          ) : (
            <Link
              to={`/blog/${_id}`}
              key={_id}
              className='post'
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className='post__bottom'>
                <div className='post__title'>{title}</div>
                <div className='arrow'>
                  <Arrow />
                </div>
              </div>
            </Link>
          );
        }
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.col-2 {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 520px;
    grid-auto-rows: 520px;
  }
  display: grid;
  padding: 30px 0;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 470px;
  grid-auto-rows: 470px;
  font-family: "Montserrat";
  font-weight: 400;
  gap: 28px;
  .blog-item {
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    position: relative;
    ${transition}
    &:hover .blog-title {
      background-color: var(--red);
    }
  }
  .blog-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 13px 36px 22px;
    ${transition}
    border-radius: 0px 0px 30px 30px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    min-height: 70px;
    text-transform: uppercase;
  }
  .blog-time {
    position: absolute;
    top: 25px;
    color: #fff;
    right: 25px;
  }
  .post__bottom {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    min-height: 80px;
    border-radius: 0px 0 23px 22px;
  }
`;
