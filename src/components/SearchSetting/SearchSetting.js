import React from 'react';
import './SearchSetting.css';

import WindowHeader from '../WindowHeader/WindowHeader';

function SearchSetting(props) {
  const middleComponent = (
    <h3 className="search-setting__text">Фильтр</h3>
  );

  return (
    <section className="search-setting">
      <WindowHeader middleComponent={middleComponent}/>
    </section>
  );
}

export default SearchSetting;