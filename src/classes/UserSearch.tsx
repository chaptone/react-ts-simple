import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps, UserSearchState> {
  state: UserSearchState = { name: "", user: undefined };

  onClick = () => {
    const foundUser = this.props.users.find(user => {
      return user.name === this.state.name;
    });
    if (foundUser) {
      this.setState({ user: foundUser });
    }
  };

  render() {
    const { name, user } = this.state;
    return (
      <div>
        User Search
        <input
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>{user?.name}</div>
      </div>
    );
  }
}

export default UserSearch;
