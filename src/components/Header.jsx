import React from 'react';
import styled from 'styled-components';
import {
  Link,
} from 'react-router-dom';

const Header = () => (
  <HeaderStyled className="header">
    <div className="container">
      <a href="/" className="logo">Logo</a>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderStyled>
);

const HeaderStyled = styled.header`
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 .6rem 2rem rgba(0, 0, 0, .06);
  pointer-events: auto;
`;

export default Header;
