import React from 'react';
import './WindowHeader.css';

import { useHistory } from 'react-router-dom';

import leftImage from '../../images/window-header__button-image_left.svg';

function WindowHeader(props) {
  const history = useHistory();

  return (
    <header className="window-header">
      <button className="window-header__button" onClick={history.goBack}>
        <img className="window-header__button-image" src={leftImage} alt="" />
      </button>
      {props.middleComponent}
      {props.rigthComponent}
    </header>
  );
}

export default WindowHeader;