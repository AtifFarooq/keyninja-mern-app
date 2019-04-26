import React, { Component } from 'react';
import Customer from './Customer';
import { Link } from 'react-router-dom';

class HomePage extends Component {

  render() {
    
    const { customers } = this.props.state;
    return (
      <React.Fragment>
        <h3>Customers</h3>
        <Link to="/customer/new" className="btn btn-primary mt-4">Add Customer</Link>
        <ul className="list-group mt-4">
            {customers.map(customer => 
                <Customer
                    key = {customer._id}
                    id = {customer._id} 
                    firstName = {customer.firstName}
                    lastName = {customer.lastName}
                    email = {customer.email}
                    deleteCustomer = {this.props.deleteCustomer}
                />
            )}
        </ul>
      </React.Fragment>
    );
  }
}

export default HomePage;

