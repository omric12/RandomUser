// import logo from "./logo.svg";
import './App.css';

import { Component, useState } from 'react';

import Card from './components/card/card.component.jsx';
import { SearchBox } from './components/searchbox/searchbox.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('/users')
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleSubmit = (e) => {
    console.log('Hi');
  };
  render() {
    if (this.state.users) {
      const { users, searchField } = this.state;
      const filteredUsers = users.filter(
        (user) =>
          user.name.first.toLowerCase().includes(searchField.toLowerCase()) ||
          user.name.last.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
        <div className='App'>
          {console.log(this.state.users)}
          <h1>RandomUser - API - State CRUD</h1>

          <div className='addNew'>
            <h3>Add new user</h3>
            <MyForm
              handleNewUser={(e) => {
                // this.setState((prevState) => ({
                //   users: [e, ...prevState.users],
                // }));

                let length = this.state.users.length;
                const newUsers = this.state.users;
                newUsers.push(e);
                console.log('new array: ', newUsers);
                this.setState({ users: newUsers });
              }}
            />
          </div>
          <SearchBox
            placeholder='Search User'
            handleChange={this.handleChange}
          />
          <div className='cardList'>
            {/* Mapping threw API results */}
            {filteredUsers.map((user, idx) => (
              <Card
                key={idx}
                id={idx}
                user={user}
                handleUpdate={(event) => {
                  const newUsers = users.map((x, i) =>
                    i === idx ? { ...x, event } : x
                  );
                  this.setState({ users: newUsers });
                }}
                handleDelete={() => {
                  const newUsers = users.filter((x, i) => i !== idx);
                  this.setState({ users: newUsers });
                }}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

function MyForm({ handleNewUser }) {
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
      <input id='submit' type='submit' />
    </form>
  );
}

export default App;
