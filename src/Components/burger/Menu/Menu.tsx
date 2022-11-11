/* eslint-disable react/jsx-filename-extension */
import React, { useState, useRef } from 'react';

import Hamburger from '../hambuger/Hamburger';
import { StyledMenu, StyledLink } from './Menu.styled';

import { useOnClickOutside } from '../hooks';

function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyledLink onClick={() => close()}>БИЗНЕС</StyledLink>
        <StyledLink onClick={() => close()}>О НАС</StyledLink>
        <StyledLink onClick={() => close()}>ЦЕНЫ</StyledLink>
        <StyledLink onClick={() => close()}>ОФОРМИТЬ ЗАКАЗ</StyledLink>

      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
}

export default Menu;
