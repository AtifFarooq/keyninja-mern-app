import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateCustomer extends Component {
  
  state = {
    firstName: "",
    lastName: "",
    email: "" 
}
  const 

// An API call to get information about this specific Customer
componentDidMount() {
    axios.get(`http://localhost:5000/api/customer/${this.props.match.params.id}`)
    .then(res => {
      console.log(res.data);
      this.setState({ 
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            email: res.data.email
       });
    })
    .catch(err => console.log(err));
}

  // Updates the values of the forms real-time as they are typed in
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  updateCustomer = () => {
    // Call the API using PUT and pass in the new updated state data
    axios.put(`http://localhost:5000/api/customer/update/${this.props.match.params.id}`, {
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
        <form onSubmit={this.updateCustomer} action="/" >
          <div className="form-group">
            <label>Email address</label>
            <input type="text" className="form-control" id="email" value={this.state.email} onChange={this.onChange.bind(this)} />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.onChange.bind(this)} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.onChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
