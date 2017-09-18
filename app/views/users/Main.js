import React, { Component } from 'react';
import TableRow from "../../components/common/TableRow";
import { Link, Location } from 'react-router';
import UserStore from '../../stores/UserStore';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users : UserStore.getAll()
        };
    }

    componentWillMount() {
        const that = this;
        UserStore.on('change', () => {
            that.setState({users: UserStore.getAll()});
        });
    }

    // componentWillUnmount() {
    //     const that = this;
    //     UserStore.removeListener('change', that.setState({users: UserStore.getAll()}));
    // }

    render() {
        const { users } = this.state;
        const ListUsers = users.map((user, index) => <TableRow index={index} {...user}/>);
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <Link to="/user/create" className="btn btn-primary btn-lg">Create</Link>
                        <div className="text-center m-t-lg">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover table-condensed">
                                    <thead>
                                        <tr>
                                            <th className="text-center">No.</th>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">Address</th>
                                            <th className="text-center">Phone</th>
                                            <th className="text-center">Gender</th>
                                            <th className="text-center">Birthday</th>
                                            <th className="text-center">Country</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    { ListUsers }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Main