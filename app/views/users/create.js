import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import UserStore from '../../stores/UserStore';
import * as UserAction from '../../actions/UserAction';

class create extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        UserAction.createUser(this.refs);
    }
    render() {
        const marginRight = {'margin-right': '15px'};
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <h1>Form Create</h1>
                        <div className="text-left m-t-lg">
                            <form onSubmit={this.submit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" ref="name" id="name" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" ref="address" id="address" placeholder="Address"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" ref="phone" id="phone" placeholder="Phone"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gender">Gender</label>
                                    <input type="text" className="form-control" ref="gender" id="gender" placeholder="Gender"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="birthday">Birthday</label>
                                    <input type="text" className="form-control" ref="birthday" id="birthday" placeholder="Birthday"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" className="form-control" ref="country" id="country" placeholder="Country"/>
                                </div>
                                <button type="submit" className="btn btn-primary" style={marginRight}>Submit</button>
                                <Link to="/users" className="btn btn-default">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default create