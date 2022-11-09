/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './MakingOrder.scss';

export default function MakingHeading() {
  return (
    <div className="makingHeading-block">
      <div className="makingHeading-title">
        Оформление
        {' '}
        <span>Заказа</span>
      </div>
      <div className="makingHeading-text">
        Перед заполнением формы ознакомьтесь с нашей схемой работы!
      </div>
    </div>
  );
}
