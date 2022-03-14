import './card.style.css';

import React, { useState } from 'react';

import Popup from '../popup/popup';

function Card({ id, user, handleDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='card-container'>
      <img className='image' src={user.picture.large} alt='user' />
      <h2>
        {user.name.title}. {user.name.last} {user.name.first}
      </h2>
      <p>{user.email}</p>
      <div>
        <button className='optionBtn' onClick={togglePopup}>
          Edit
        </button>
        <button className='optionBtn' onClick={handleDelete}>
          Delete
        </button>
        <button className='optionBtn' onClick={togglePopup}>
          Details
        </button>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Manage account</b>
              <form action='/action_page.php'>
                <label for='fname'>First name:</label>
                <input type='text' id='fname' name='fname' />
                <label for='lname'>Last name:</label>
                <input type='text' id='lname' name='lname' />
                <input type='submit' value='Submit' />
              </form>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Card;
