import React, { useState } from "react";
import plusIcon from "../assets/icons/categories/plus.svg";
import cartIcon from "../assets/icons/header-3.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { addToCart } from "../features/cartSlice";
import { CheckIcon } from "./CheckIcon";

export const Product = ({ _id, image, title, isNew, price }) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  return (
    <div className='product'>
      <Link to={`/products/${_id}`} className='product__img'>
        <img src={image} alt={title} />
      </Link>
      <div className='product__descr'>
        <Link to={`/products/${_id}`} className='product__title'>
          {title}
        </Link>
        <div className='product__descr-wrapper'>
          <span className='price'>850 р.</span>
          {isNew && <span className='new'>Новинка</span>}
        </div>
      </div>
      <button
        className='add-to-cart'
        style={{ backgroundColor: `${clicked ? "transparent" : `var(--red)`}` }}
        onClick={() => {
          dispatch(addToCart({ _id, image, title, price }));
          setClicked(true);
          setTimeout(() => setClicked(false), 2000);
        }}
      >
        {!clicked && (
          <>
            <img src={plusIcon} alt='plusIcon' className='plus-icon' />
            <img src={cartIcon} alt='cart icon' className='cart-icon' />
          </>
        )}
        {clicked && <CheckIcon />}
      </button>
    </div>
  );
};
