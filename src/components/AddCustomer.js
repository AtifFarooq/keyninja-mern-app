import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateCustomer extends Component {
  
  state = {
    firstName: "",
    lastName: "",
    email: "" 
}
  const 

  // Updates the values of the forms real-time as they are typed in
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  addCustomer = () => {
    // Call the API using POST and pass in the new updated state data
    axios.post(`http://localhost:5000/api/customer/`, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  
  render() {

    return (
      <div>
        <form onSubmit={this.addCustomer} action="/" >
          <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.onChange.bind(this)} placeholder="First Name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.onChange.bind(this)} placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="text" className="form-control" id="email" value={this.state.email} onChange={this.onChange.bind(this)} placeholder="Email" />
          </div>
          <button type="submit" className="btn btn-primary">Add Customer</button>
        </form>
      </div>
    )
  }
}
