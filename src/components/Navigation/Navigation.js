import React from 'react';
import './Navigation.css';

import { NavLink } from 'react-router-dom';

import cardImage from '../../images/navigation__button-image_card.png';
import messegeImage from '../../images/navigation__button-image_messege.svg';
import profileImage from '../../images/navigation__button-image_profile.svg';

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink className="navigation__button" activeClassName="navigation__button_active" exact to="/">
        <img className="navigation__button-image" src={cardImage} alt="" />
      </NavLink>
      <NavLink className="navigation__button" activeClassName="navigation__button_active" exact to="/messeges">
        <img className="navigation__button-image" src={messegeImage} alt="" />
      </NavLink>
      <NavLink className="navigation__button" activeClassName="navigation__button_active" exact to="/profile">
        <img className="navigation__button-image" src={profileImage} alt="" />
      </NavLink>
    </nav>
  );
}

export default Navigation;