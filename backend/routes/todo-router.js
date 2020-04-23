const express = require("express");
const todoRouter = express.Router();
const Todo = require("../model/todo.model");
todoRouter.get("/", function (req, res) {
  Todo.find(function (err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRouter.get("/:id", function (req, res) {
  let id = req.params.id;
  Todo.findById(id, function (err, todo) {
    res.json(todo);
  });
});

todoRouter.post("/add", function (req, res) {
  let todo = new Todo(req.body);

  todo
    .save()
    .then((todo) => {
      res.status(200).json({ todo: "Todo Added Successfully !" });
    })
    .catch((err) => {
      res.status(400).send("Adding new Todo failed!");
    });
});

todoRouter.post("/update/:id", function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (!todo) {
      res.status(400).send("Data is not found!");
    } else {
      todo.description = req.body.description;
      todo.responsible = req.body.responsible;
      todo.priority = req.body.priority;
      todo.priority = req.body.priority;
      todo.completed = req.body.completed;

      todo
        .save()
        .then((todo) => {
          res.json("Todo Updated !");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
});
module.exports = todoRouter;
