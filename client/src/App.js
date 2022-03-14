// import logo from "./logo.svg";
import './App.css';

import { CardList } from './components/card-list/card-list.component';
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
          {console.log(this.state)}

          <h1>Users Rolodex</h1>
          <SearchBox
            placeholder='Search User'
            handleChange={this.handleChange}
          />
          <CardList users={filteredUsers}></CardList>
        </div>
      );
    }
  }
}

export default App;
