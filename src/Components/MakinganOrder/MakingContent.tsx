/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './MakingOrder.scss';
import img from './img/Group1.png';
import img2 from './img/Group2.png';
import img3 from './img/Group3.png';
import img4 from './img/Group4.png';
import img5 from './img/Group5.png';
import img6 from './img/Ellipse7.png';

// const numbers: any = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number: any) => <li>{number}</li>);

export default function MakingContent() {
  return (
    <div className="makingContent-block">
      <div className="makingContent-block-content">
        <div className="makingContent-block-content-one">
          <img src={img} alt="***" />
        </div>
        <div className="block-icon">
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
        </div>
        <div className="makingContent-block-content-one">
          <img src={img2} alt="***" />
        </div>
        <div className="block-icon">
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
        </div>
        <div className="makingContent-block-content-one">
          <img src={img3} alt="***" />
        </div>
        <div className="block-icon">
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
        </div>
        <div className="makingContent-block-content-one">
          <img src={img4} alt="***" />
        </div>
        <div className="block-icon">
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
          <img className="block-icon-img" src={img6} alt="***" />
        </div>
        <div className="makingContent-block-content-one">
          <img src={img5} alt="***" />
        </div>
      </div>
      <div className="makingContent-text">
        <div className="makingContent-block-content-text">
          Lorem ipsum dolor
          sit amet
        </div>
        <div className="makingContent-block-content-text">Сonsecteturadipiscing elit</div>
        <div className="makingContent-block-content-text">Sed do eiusmod tempor</div>
        <div className="makingContent-block-content-text">
          Esse cillum dolore
          eu fugiat
        </div>
        <div className="makingContent-block-content-text">
          Excepteur sint occaecat
          <br />
          cupidatat non proident
        </div>
      </div>
    </div>
  );
}
