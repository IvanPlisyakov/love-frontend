import React from 'react';
import './Header.css';



import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import settingtImage from '../../images/header__menu-image.png';

function Header() {
  const { path } = useRouteMatch();

  return (
    <header className="header">
      <p className="header__logo">Badoo</p>
      {path === '/' &&
        <Link className="header__menu" to="/search-setting">
          <img className="header__menu-image" src={settingtImage} alt="" />
        </Link>
      }
    </header>
  );
}

export default Header;

/*
    <section className={`header__search-setting ${asideActive ?  '' : 'header__search-setting_inactive'}`}>
      <div className="header__search-setting"
    </section>
*/