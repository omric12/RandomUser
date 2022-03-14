import './searchbox.style.css';

import React from 'react';

export const SearchBox = ({placeholder, handleChange}) => (
    <input
        type='search'
        className='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
);
