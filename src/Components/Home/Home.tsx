/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import './Home.scss';

export default function Home() {
  return (
    <div className="main-container">
      <Main />
      <Footer />
    </div>
  );
}
