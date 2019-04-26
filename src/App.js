import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CustomerDetails from './components/CustomerDetails';
import UpdateCustomer from './components/UpdateCustomer';
import AddCustomer from './components/AddCustomer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  
  state = {
    customers: []
  };

  // Make an API call to get all the current customers in our db
  componentDidMount() {
    axios.get('http://localhost:5000/api/customer/')
         .then(res => {
           this.setState({ customers: res.data });
         })
         .catch(err => console.log(err));
  }

  // Delete the Customer from the state because the Delete button was pressed
  deleteCustomer = (id) => {
    // Remove Customer from the db
    axios.delete(`http://localhost:5000/api/customer/delete/${id}`)
    .then(res => {
      // Then, remove the customer from our state as well so that the user also sees the change
      this.setState({
        customers: [...this.state.customers.filter(customer => customer._id !== id)]
      });
    })
    .catch(err => console.log(err));
    
  }

  // Update the Customer's details from the state
  updateCustomer = (id) => {
    console.log("Update " + id);
  }
  
  render() {
    
    return (
      <Router>
        <NavBar />
        <div className="container">
            <Switch>
              <Route exact path="/" render={
                (state) => <HomePage state={this.state} deleteCustomer={this.deleteCustomer} />
              } 
              />              
              
              <Route exact path="/customer/details/:id" component={CustomerDetails} 
              />

              <Route exact path="/customer/update/:id" component={UpdateCustomer}
              />

              <Route exact path="/customer/new" component={AddCustomer} />
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
