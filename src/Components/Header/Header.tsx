/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <nav className="headr-nav">
        <div className="header-nav-block-logo">
          <h1 className="header-nav_logo"><Link to="/">LOREMIPSUN.NET</Link></h1>
        </div>
        <ul className="header-nav-list">
          <li className="header-nav-link"><Link to="/Business">Бизнес</Link></li>
          <li className="header-nav-link"><Link to="/About">О нас</Link></li>
          <li className="header-nav-link"><Link to="/Price">Цены</Link></li>
          <li className="header-nav-link"><Link to="/Place-an-order">Оформить заказ</Link></li>
        </ul>
      </nav>
    </div>
  );
}
