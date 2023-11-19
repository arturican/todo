import React from 'react';
import './Header.css';
import { Logo } from './Logo/Logo';

export const Header = () => {
  return (
    <header className={'header'}>
      <Logo />
      <a href="#portfolio">Portfolio</a>
      <a href="#blog">Blog</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </header>
  );
};
