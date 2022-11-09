/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import MakingContent from './MakingContent';
import MakingForm from './MakingForm';
import MakingHeading from './MakingHeading';
import './MakingOrder.scss';

export default function MakingOrder() {
  return (
    <div className="MakingOrder-block">
      <MakingHeading />
      <MakingContent />
      <MakingForm />
    </div>
  );
}
