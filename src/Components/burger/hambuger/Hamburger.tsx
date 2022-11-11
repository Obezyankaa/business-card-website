/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { StyledHamburger } from './Hamburger.styled';

export type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

function Hamburger(props: Props) {
  return (
    <StyledHamburger open={props.open} onClick={() => props.setOpen(!props.open)}>
      <div />
      <div />
      <div />
    </StyledHamburger>
  );
}

export default Hamburger;
