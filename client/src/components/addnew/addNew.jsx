import './addNew.style.css';

import { useState } from 'react';

function AddNew({ handleNewUser }) {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let newInfo = { name: { first: first, last: last }, email: email };
        handleNewUser(newInfo);
    };

    return (
        <form onSubmit={handleSubmit} id='form'>
            <label>
                Enter your first name:{' '}
                <input
                    id='input'
                    type='text'
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                />
            </label>
            <br />
            <br />
            <label>
                Enter your last name:{' '}
                <input
                    id='input'
                    type='text'
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                />
            </label>
            <br />
            <br />
            <label>
                Enter your email:{' '}
                <input
                    id='input'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <br />
            <input id='submit' type='submit' value='Submit User' />
        </form>
    );
}

export default AddNew;
