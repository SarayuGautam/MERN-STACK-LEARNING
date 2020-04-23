import React, { Component } from "react";
import axios from "axios";
import Todo from "../elements/todos.component";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/todos/")
      .then((res) => {
        this.setState({
          todos: res.data,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  todoList() {
    return this.state.todos.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table
          className="table table-striped"
          style={{
            marginTop: 20,
          }}
        >
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}
