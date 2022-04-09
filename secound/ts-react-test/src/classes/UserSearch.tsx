import { Component } from "react";

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: {
        name: string;
        age: number;
    }[]
}

interface UserSearchState {
    name: string;
    user: { name: string, age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined
    };

    onClick = () => {
        const foundUser = this.props.users.find((u) => {
            return u.name === this.state.name;
        });
        this.setState({ user: foundUser });
    };

    render() {
        const { name, user } = this.state;

        return (
            <div>
                User Search
                <input value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                <button onClick={this.onClick}>Find User</button>
                <div>
                    {user && user.name}
                    <br />
                    {user && user.age}
                </div>
            </div>
        );
    }
}

export default UserSearch;