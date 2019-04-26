const express = require("express");
const router = express.Router();

// This document contains our API for CRUD functionality

// Bring in the Model
let Customer = require('../../models/customer');

// GETs all customers
router.get("/", (req, res) => {
    // Find all the customers currently in the db
    Customer.find({}, (err, customers) => {
        if (err) {
            console.log(err);
        } else {
            // We want to return the customers as a JSON object  
            res.json(customers);
        }
    });
  
});

// GET a single customer. :id is a URL parameter
router.get("/:id", (req, res) => {
  Customer.findById(req.params.id, (err, customer) => {
    if (err) {
        console.log(err);
        // Return a 400 bad request
        res.status(400).json({ message: `No customer with the id ${req.params.id}` })
    } else {
        res.json(customer);
    }
});


});

// Create a customer (We want to make a POST request)
router.post("/", (req, res) => {

  // Initialize a new Customer and assign values from the POST request
  let customer = new Customer();
  customer.firstName = req.body.firstName;
  customer.lastName = req.body.lastName;
  customer.email = req.body.email;

  // Quick check
  if (!customer.firstName || !customer.email) {
    return res
      .status(400)
      .json({ message: "Please include a first name and an email" });
  }
  
  // Save the customer to the db
  customer.save((err) => {
      if (err) {
          console.log(err);
          return;
      } else {
          // Send a response displaying the customer
        res.json(customer);
      }
  });


});

// Update customer
router.put("/update/:id", (req, res) => {

  let customer = {};
  customer.firstName = req.body.firstName;
  customer.lastName = req.body.lastName;
  customer.email = req.body.email;
  
  let query = {_id: req.params.id};
  Customer.update(query, customer, (err) => {
      if (err) {
          console.log(err);
          return;
      } else {
          res.json({ message: "Customer Details Updated", customer: customer });
      }
  }); 

});

// DELETE a member
router.delete("/delete/:id", (req, res) => {

  let query = { _id: req.params.id };
  Customer.remove(query, (err) => {
      if (err) {
          console.log(err);
      }
      res.json({ message: "Customer Deleted", query: query });
  })


});

module.exports = router;