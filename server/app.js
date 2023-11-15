const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const postRoutes = require("./routes/posts");

const app = express();
const port = 8080;
dotenv.config();
const mongoURI = process.env.MONGODB_URI;

app.use(bodyParser.json());
app.use(cors());

app.use("/posts", postRoutes);

// Start the server
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB.");
    app.listen(port);
    console.log(`Server is running on port: ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
