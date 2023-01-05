import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

//images
import prevIcon from "../assets/icons/slider/prev.svg";
import nextIcon from "../assets/icons/slider/next.svg";
import advantagesImage1 from "../assets/img/product-page/advantages-1.jpg";
import advantagesImage2 from "../assets/img/product-page/advantages-2.jpg";

import { Admit } from "../components/Admit";
import { PrimaryProduct } from "../components/PrimaryProduct";
import { gallery_images } from "../mock";
import { advantagesSection, transition } from "./../style-models/mixins/mixins";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectSingleProduct } from "../selectors/products/general_selectors";
import { addToCart } from "../features/cartSlice";

export const Product = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { id } = useParams();
  const product = useSelector((store) => selectSingleProduct(store, id));
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <PrimaryProduct {...product} />
      <section className='gallery'>
        <div className='img-container'>
          <img src={gallery_images[activeImageIndex]} alt='product' />
        </div>
        <button
          onClick={() => {
            if (activeImageIndex === 0) return;

            setActiveImageIndex(activeImageIndex - 1);
          }}
          className='gallery__btn prev'
        >
          <img src={prevIcon} alt='prev icon' />
        </button>
        <button
          onClick={() => {
            if (activeImageIndex === gallery_images.length - 1) return;

            setActiveImageIndex(activeImageIndex + 1);
          }}
          className='gallery__btn next'
        >
          <img src={nextIcon} alt='next icon' />
        </button>
      </section>
      <section className='single-product'>
        <div className='container-fluid'></div>
        <div className='product-descr'>
          <div className='container'>
            <div className='product-descr__inner'>
              <div className='product-descr__gallery'>
                <img src={product.image} alt={product.title} />
              </div>
              <div className='product-descr__characteristics'>
                <h4>Характеристики</h4>
                <div className='product-descr__item'>
                  <p>Длина лезвия</p>
                  <p>24 см</p>
                </div>
                <div className='product-descr__item'>
                  <p>Длина лезвия</p>
                  <p>24 см</p>
                </div>
                <div className='product-descr__item'>
                  <p>Длина лезвия</p>
                  <p>24 см</p>
                </div>
                <div className='product-descr__item'>
                  <p>Длина лезвия</p>
                  <p>24 см</p>
                </div>
                <div className='product-descr__item'>
                  <p>Цена</p>
                  <p>{product.price} р.</p>
                </div>
                <button
                  className='btn'
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: id,
                        image: product.image,
                        title: product.title,
                        price: product.price,
                      })
                    )
                  }
                >
                  Купить
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Admit />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  ${advantagesSection};
  .gallery {
    position: relative;
    padding: 90px 0;
    background: #272727;
  }
  .img-container {
    img {
      width: 100%;
      object-fit: cover;
      height: 700px;
    }
    ${transition};
  }
  .gallery__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #444;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    &.prev {
      left: 40px;
    }
    &.next {
      right: 40px;
    }
  }
  .single-product {
    padding: 90px 0;
    .title {
      text-align: center;
    }
  }
  /* product-descr__inner */
  .product-descr__inner {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .product-descr__gallery {
    margin-right: 250px;
  }

  .product-descr__characteristics {
    h4 {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      padding-bottom: 6px;
      border-bottom: 2px solid var(--red);
      margin-bottom: 20px;
      display: inline-block;
    }
  }
  .product-descr__item {
    border-bottom: 1px solid #4f4f4f;
    padding-bottom: 10px;
    column-gap: 40px;
    display: grid;
    grid-template-columns: 280px 55px;
    & + .product-descr__item {
      padding-top: 15px;
    }
  }
  .product-descr__gallery {
    img {
      width: 100%;
      border-radius: 20px;
    }
  }
  .btn {
    margin-top: 40px;
  }
`;
