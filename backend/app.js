const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Defining the name of the MongoDB
mongoose.connect('mongodb://localhost/customerdb');
let db = mongoose.connection;

// Check connection
db.once('open', () => {
    console.log("Connected to MongoDB");
});

// Check for db errors
db.on('error', (err) => {
    console.log(err);
});

// Init application
const app = express();

// CORS middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// API routes
app.use("/api/customer", require("./routes/api/customers"));

// Listen on this port
const port = 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});