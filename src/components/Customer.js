import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Customer extends Component {
  // Each 'Customer' is a single atomic building block
  render() {
    const { id, firstName, lastName, email } = this.props;
    
    return (
      <div>
        <li className="list-group-item">
          <a href={'/customer/details/' + id}> {firstName} {lastName} : {email} </a>
          <Link to={`/customer/update/${id}`} className="btn btn-outline-secondary btn-sm float-right ml-4">Edit</Link>
          <button onClick={this.props.deleteCustomer.bind(this, id)} className="btn btn-outline-secondary btn-sm float-right">Delete</button>
        </li>
      </div>
    )
  }
}
