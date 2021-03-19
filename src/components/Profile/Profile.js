import React from 'react';
import './Profile.css';

import Navigation from '../Navigation/Navigation'

function Profile(props) {
  return (
    <section className="profile">
      <p>Тут шапка</p>
      <p>Тут профиль</p>
      <Navigation />
    </section>
  );
}

export default Profile;