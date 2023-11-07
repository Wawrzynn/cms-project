const express = require("express");
const app = express();
const port = 8080;

// Define a route
app.get("/", (req, res) => {
  res.send("CMS server is running");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
