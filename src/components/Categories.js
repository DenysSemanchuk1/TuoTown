// Images
import kitchen from "../assets/icons/categories/kitchen.svg";
import accessories from "../assets/icons/categories/accessories.svg";
import folding from "../assets/icons/categories/folding.svg";
import sharpener from "../assets/icons/categories/sharpener.svg";
import blog from "../assets/img/categories/blog-1.jpg";
import { ReactComponent as Arrow } from "../assets/icons/categories/arrow.svg";

import Wrapper from "../style-models/Categories";
import { Link } from "react-router-dom";
import { getFilteredProducts } from "./../features/productsSlice";
import { Product } from "./Product";
import { selectProducts } from "../selectors/products/general_selectors";
import { Admit } from "./Admit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";

const removeActiveClass = () => {
  const btns = document.querySelectorAll(".category-btn");
  btns.forEach((btn) => btn.classList.remove("active"));
};

export const Categories = () => {
  const dispatch = useDispatch();
  const { filteredByCategory } = useSelector(selectProducts);
  useEffect(() => {
    dispatch(getFilteredProducts("kitchen"));
  }, []);
  const handleFilter = (e) => {
    if (e.target.tagName === "BUTTON") {
      if (e.target.classList.contains("active")) return;

      removeActiveClass();
      e.target.classList.add("active");
      dispatch(getFilteredProducts(e.target.dataset.category));
    }
  };
  return (
    <Wrapper>
      <div className='categories'>
        <div className='container-fluid'>
          {/* Добавить обработчик */}
          <div className='categories-wrapper' onClick={handleFilter}>
            <button data-category='kitchen' className='category-btn active'>
              <img src={kitchen} alt='kitchen knife' />
              Кухонные ножи
            </button>
            <button data-category='folding' className='category-btn'>
              <img src={folding} alt='folding knife' />
              Складные ножи
            </button>
            <button data-category='sharpener' className='category-btn'>
              <img src={sharpener} alt='sharpener knife' />
              Точилки для ножей
            </button>
            <button data-category='accessories' className='category-btn'>
              <img src={accessories} alt='accessories knife' />
              Аксессуары для кухни
            </button>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='content'>
          <Link
            to='/catalog'
            className='post'
            style={{ backgroundImage: `url(${blog})` }}
          >
            <div className='post__bottom'>
              <div className='post__title'>
                Познакомьтесь с коллекцией ножей TUOTOWN
              </div>
              <div className='arrow'>
                <Arrow />
              </div>
            </div>
          </Link>
          {filteredByCategory.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </div>
      <Admit />
      <div className='container-fluid'>
        <div className='content'>
          {console.log(filteredByCategory)}
          {filteredByCategory.slice(0, 4).map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
