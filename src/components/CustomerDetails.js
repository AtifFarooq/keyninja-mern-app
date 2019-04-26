import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CustomerDetails extends Component {
    
    state = {
        firstName: "",
        lastName: "",
        email: "" 
    }

    // An API call to get information about this specific Customer
    componentDidMount() {
        axios.get(`http://localhost:5000/api/customer/${this.props.match.params.id}`)
        .then(res => {
          this.setState({ 
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email
           });
        })
        .catch(err => console.log(err));
    }

    render() {
    
    return (
      <React.Fragment>
        <div className="card">
            <h1 className="card-header">{this.state.firstName} {this.state.lastName}</h1>
            <p className="card-body">{this.state.email}</p>
        </div>
        <Link to="/" className="btn btn-outline-primary mt-4">Go Back</Link>
      </React.Fragment>
    )
  }
}

