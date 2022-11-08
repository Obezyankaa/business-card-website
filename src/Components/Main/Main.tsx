/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Main.scss';
import MainButton from './MainButton';
import MainHeading from './MainHeading';
import MainList from './MainList';

export default function Main() {
  return (
    <section className="main-section">
      <main>
        <div className="main-block">
          <MainHeading />
          <MainList />
          <MainButton />
        </div>
      </main>
    </section>
  );
}
