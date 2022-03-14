import './card-list.style.css';

import { Card } from '../card/card.component.jsx';
import React from 'react';

export const CardList = (props) => (
  <div className='card-list'>
    {props.users.map((user, i) => (
      <Card key={i} user={user} />
    ))}
  </div>
);
