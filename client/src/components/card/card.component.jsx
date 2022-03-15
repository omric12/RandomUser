import './card.style.css';

import React, { useEffect, useState } from 'react';

import Popup from '../popup/popup';

function Card({ user, handleDelete, handleUpdate, onClick }) {
    const [isOpen, setIsOpen] = useState(false);
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    // Toggle pop up for editing
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    // Submit edited information
    const handleSubmit = (e) => {
        e.preventDefault();
        let newInfo = { ...user, name: { first: first, last: last } };
        handleUpdate(newInfo);
        togglePopup();
    };
    // React hook to update data if changed
    useEffect(() => {
        setFirst(user.name.first);
        setLast(user.name.last);
    }, []);
    // Only load display after we loaded user information
    if (user) {
        return (
            <div className='card-container'>
                <img className='image' src={user.picture?.large} alt='Who Are You?' />
                <h2>
                    {user.name.title}. {last} {first}
                </h2>
                <p>{user.email}</p>
                <div>
                    <button className='optionBtn' onClick={togglePopup}>
                        Edit
                    </button>
                    <button className='optionBtn' onClick={handleDelete}>
                        Delete
                    </button>
                    <button className='optionBtn' o onClick={onClick}>
                        Details
                    </button>
                </div>
                {isOpen && (
                    <Popup
                        content={
                            <>
                                <b style={{ color: 'black' }}>Manage account</b>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor='fname'>First name:</label><br />
                                    <input
                                        type='text'
                                        name='fname'
                                        value={first}
                                        onChange={(e) => {
                                            setFirst(e.target.value);
                                        }}
                                    /><br />
                                    <label htmlFor='lname'>Last name:</label><br />
                                    <input
                                        type='text'
                                        name='lname'
                                        value={last}
                                        onChange={(e) => {
                                            setLast(e.target.value);
                                        }}
                                    /><br />
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
}

export default Card;
