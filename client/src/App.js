// import logo from "./logo.svg";
import './App.css';

import Card from './components/card/card.component.jsx';
import { Component } from 'react';
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
          <h1>Users Rolodex</h1>
          <SearchBox
            placeholder='Search User'
            handleChange={this.handleChange}
          />
          <div className='cardList'>
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

export default App;
