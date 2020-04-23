const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const todoRouter = require("./routes/todo-router");

app.use(cors());
app.use(bodyParser.json());
app.use("/todos", todoRouter);

//setting Up Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/todos", {
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, function () {
  console.log("Server running on PORT:" + PORT);
});
