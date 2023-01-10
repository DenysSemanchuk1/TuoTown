import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dots } from "../assets/icons/header-1.svg";
import { ReactComponent as MapIcon } from "../assets/icons/header-2.svg";
import { ReactComponent as CartIcon } from "../assets/icons/header-3.svg";
import { ReactComponent as EnvelopeIcon } from "../assets/icons/header-4.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/header-5.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone-icon.svg";
import logo from "../assets/img/logo.png";
import Wrapper from "../style-models/Header";
import { useDispatch } from "react-redux/es/exports";
import { openSidebar } from "../features/sideBarSlice";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className='container-fluid'>
        <div className='wrapper'>
          <div className='left'>
            <button className="dots-btn"onClick={() => dispatch(openSidebar())}>
              <Dots />
            </button>
            <Link to='/map' className="map-btn">
              <MapIcon />
            </Link>
            <a href='tel:89811201117' className='phone'>
              8 981 120-11-17
              <PhoneIcon />
            </a>
            <Link to='/cart' className="cart-btn">
              <CartIcon/>
            </Link>
          </div>
          <Link className='center' to='/'>
            <img src={logo} alt='TuoTown' />
          </Link>
          <div className='right'>
            <Link to='/cart'>
              <CartIcon />
            </Link>
            <button>
              <EnvelopeIcon />
            </button>
            <button>
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
