import './App.css';

import AddNew from './components/addnew/addNew';
import Card from './components/card/card.component.jsx';
import { Component } from 'react';
import Detailed from './components/detailed/detailed';
import { SearchBox } from './components/searchbox/searchbox.component';
import { Text } from '@chakra-ui/react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: '',
      hero: false,
      currentUser: {},
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
  toggleHero = (user) => {
    if (user === this.state.currentUser) {
      this.setState({ hero: !this.state.hero });
    }
    this.setState({ currentUser: user });
  };

  render() {
    if (this.state.users) {
      const { users, searchField, hero, currentUser } = this.state;
      const filteredUsers = users.filter(
        (user) =>
          user.name.first.toLowerCase().includes(searchField.toLowerCase()) ||
          user.name.last.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
        <div className='App'>
          <Text
            fontSize='25'
            py='8'
            px='4'
            w='100%'
            bgClip='text'
            bgGradient='linear(to-r,purple.400, green.800)'
            fontWeight='extrabold'>
            RandomUser
          </Text>

          <div className='addNew'>
            <h3>Add new user</h3>
            <AddNew
              handleNewUser={(e) => {
                // this.setState((prevState) => ({
                //   users: [e, ...prevState.users],
                // }));

                const newUsers = this.state.users;
                newUsers.push(e);
                this.setState({ users: newUsers });
              }}
            />
          </div>
          <SearchBox
            placeholder='Search User'
            handleChange={this.handleChange}
          />
          {hero ? (
            <div className='hero'>
              <Detailed currentUser={currentUser} />
            </div>
          ) : (
            <></>
          )}
          <div className='cardList'>
            {/* Mapping through API results */}
            {filteredUsers.map((user, idx) => (
              <Card
                onClick={this.toggleHero.bind(this, user)}
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
