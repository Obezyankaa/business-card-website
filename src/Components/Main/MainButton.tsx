/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Main.scss';

export default function MainButton() {
  return (
    <div className="MainButton">
      <button className="btn-order" type="submit">ЗАКАЗАТЬ</button>
      <button className="btn-more" type="submit">ПОДРОБНЕЕ</button>
    </div>
  );
}
