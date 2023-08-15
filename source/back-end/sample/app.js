const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const { create_connection, close_connection } = require('./config/sample.mongodb');

// Initialization
const app = express();

// Environment variables
const PORT = process.env.PORT || 3001;

// Config Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes (Static route)
app.use("/", require("./routes/notFound"));

// Routes (Dynamic routes)
app.use("/api", require("./routes"));

// Listen
const server = app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
})

// Connection to database
create_connection();

module.exports = { app, server }