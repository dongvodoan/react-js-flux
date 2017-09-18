import React, { Component } from 'react';
import { Link, Location } from 'react-router';

class TableRow extends Component {
    render() {
        const { Id, Name, Address, Phone, Gender, Birthday, Country} = this.props;
        return (
            <tr className="text-center">
                <td>{this.props.index + 1}</td>
                <td>{Name}</td>
                <td>{Address}</td>
                <td>{Phone}</td>
                <td>{Gender}</td>
                <td>{Birthday}</td>
                <td>{Country}</td>
                <td>
                    <div className="btn-group">
                        <Link to={`/user/show/${Id}`} className="btn btn-info">Show</Link>
                        <Link to="" className="btn btn-primary">Edit</Link>
                        <Link to="" className="btn btn-danger">Delete</Link>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow