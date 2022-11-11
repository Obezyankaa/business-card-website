/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './index.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-text">
          © 2018 «LoremIpsum.net» Все права защищены.
        </div>
        <div className="footer-separator">
          |
        </div>
        <div className="footer-qiwi">
          Qiwi wallet
        </div>
        <div className="footer-yandex">
          Yandex Money
        </div>
        <div className="footer-money">
          Web Money
        </div>
        <div className="footer-separator">
          |
        </div>
        <div className="footer-mail">
          info@ipsum228.com
        </div>
        <div className="footer-vk">
          Мы вконтакте
        </div>
      </div>
    </div>
  );
}
