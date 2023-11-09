const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


const app = express();
const port = 8080;
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
