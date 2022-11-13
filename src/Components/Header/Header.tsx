/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../burger/Menu/Menu';
import './Header.scss';

export default function Header() {
  return (
    <div className="header banner-outer">
      <div className="header-block">
        <Menu />
      </div>
      <nav className="headr-nav banner-inner">
        <div className="header-container">
          <div className="header-nav-block-logo">
            <h1 className="header-nav_logo">
              <Link to="/">
                LOREMIPSUN.
                <span>NET</span>
              </Link>
            </h1>
          </div>
          <ul className="header-nav-list">
            <li className="header-nav-link"><Link to="/Business">БИЗНЕС</Link></li>
            <li className="header-nav-link"><Link to="/About">О НАС</Link></li>
            <li className="header-nav-link"><Link to="/Price">ЦЕНЫ</Link></li>
            <li className="header-nav-link"><Link to="/Place-an-order">ОФОРМИТЬ ЗАКАЗ</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
