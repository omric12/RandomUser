import './card.style.css';

import React from 'react';

export const Card = ({ user }) => (
  <div className='card-container'>
    <img src={user.picture.large} alt='user' />
    <h2>
      {user.name.title}. {user.name.last} {user.name.first}
    </h2>
    <p>{user.email}</p>
  </div>
);
