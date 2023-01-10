import styled from "styled-components";
import { Primary } from "../components/Primary";
import { Products } from "./../components/Products";
import { transition } from "./../style-models/mixins/mixins";
import { Admit } from "./../components/Admit";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { selectProducts } from "../selectors/products/general_selectors";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFilteredProducts } from "../features/productsSlice";
import { useHandleFilter } from './../hooks/useHandleFilter';
const removeActiveClass = () => {
  const btns = document.querySelectorAll("a[data-filter]");
  btns.forEach((btn) => btn.classList.remove("active"));
};
export const Catalog = () => {
  const { filter } = useParams();
  const { allProducts, filteredByCategory, newProducts, popularProducts } =
    useSelector(selectProducts);
  const handleFilter = useHandleFilter()

  return (
    <Wrapper>
      <Primary />
      <div className='container-fluid'>
        <div className='filter'>
          <aside className='filter-aside' onClick={handleFilter}>
            <div className='filter-item'>
              <Link to='/catalog/kitchen' data-filter='kitchen'>
                Кухонные ножи
              </Link>
            </div>
            <div className='filter-item'>
              <Link to='/catalog/accessories' data-filter='accessories'>
                Аксессуары для кухни
              </Link>
            </div>
            <div className='filter-item'>
              <Link to='/catalog/sharpener' data-filter='sharpener'>
                Точилки для ножей
              </Link>
            </div>
            <div className='filter-item'>
              <Link to='/catalog/folding' data-filter='folding'>
                Складные ножи
              </Link>
            </div>
            <div className='filter-item'>
              <Link to='/catalog/popular' data-filter='popular'>
                Популярные
              </Link>
            </div>
            <div className='filter-item'>
              <Link to='/catalog/new' data-filter='new'>
                Новинки
              </Link>
            </div>
          </aside>
          <div className='products'>
            <div className='title'>Ножи</div>

            {!filter && <Products data={allProducts} cols={3} />}
            {filter && <Products data={filteredByCategory} cols={3} />}
            {filter === "new" && <Products data={newProducts} cols={3} />}
            {filter === "popular" && (
              <Products data={popularProducts} cols={3} />
            )}
          </div>
        </div>
      </div>
      <Admit />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .filter {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 50px 0;
    .title {
      text-align: center;
    }
    .filter-aside {
      max-width: 300px;
      width: 100%;
      padding-top: var(--pt);
    }
    .container-fluid {
      padding: 0;
      width: 100%;
      max-width: 100%;
    }
    .filter-item {
      a {
        background-color: transparent;
        border: none;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #adacac;
        padding: 20px 0;
        ${transition};
        display: inline-block;
        &:hover {
          color: var(--red);
        }
        &.active {
          color: var(--red);
        }
      }
    }
  }
`;
