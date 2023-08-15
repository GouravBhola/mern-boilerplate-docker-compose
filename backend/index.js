// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world! gouravvvvvv');
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
