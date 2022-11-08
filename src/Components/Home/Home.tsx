/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import MakingOrder from '../MakinganOrder/MakingOrder';
import './Home.scss';

export default function Home() {
  return (
    <div className="main-container">
      <div className="main-container_background_photo">
        <Header />
        <Main />
      </div>
      <div className="makingOrder-container_background_photo">
        <MakingOrder />
      </div>
      <Footer />
    </div>
  );
}
