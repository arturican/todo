import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Главная
          </a>
        </li>
        <li className="nav-item">
          <a href="/portfolio" className="nav-link">
            Портфолио
          </a>
        </li>
        <li className="nav-item">
          <a href="/services" className="nav-link">
            Услуги
          </a>
        </li>
        <li className="nav-item">
          <a href="/blog" className="nav-link">
            Блог
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};
