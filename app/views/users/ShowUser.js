import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import UserStore from '../../stores/UserStore';
import * as UserAction from '../../actions/UserAction';

class ShowUser extends Component {
    constructor(props) {
        super(props);
        const userId = this.props.params.userid;
        this.state = {
            user: UserStore.getAll().filter(user => user.Id==userId)[0],
        };
    }

    componentWillMount() {
        const userId = this.props.params.userid;
    //     // const users = UserStore.getAll().filter(user => user.Id==userId);
    //     // const user = users[0];
        this.setState({user: userId});
        console.log(this.state.user);
    }

    render() {
        // const { Name, Address, Phone, Gender, Birthday, Country } = this.state;
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <div className="text-left m-t-lg">
                            <h1>Show User</h1>
                            <label>Name</label> : <p>{this.state.user.Name}</p>
                            <label>Name</label> : <p>{this.state.user.Address}</p>
                            <label>Name</label> : <p>{this.state.user.Phone}</p>
                            <label>Name</label> : <p>{this.state.user.Gender}</p>
                            <label>Name</label> : <p>{this.state.user.Birthday}</p>
                            <label>Name</label> : <p>{this.state.user.Country}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ShowUser