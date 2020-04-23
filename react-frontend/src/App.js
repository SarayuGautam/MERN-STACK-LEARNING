import React, { Component } from "react";
import "./App.css";
import TodoList from "../src/components/todos-list.component";
import EditTodo from "../src/components/edit-todo.component";
import CreateTodo from "../src/components/create-todo.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNav from "./components/navbar.component";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <CustomNav />
        </div>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit:id" component={EditTodo} />
        <Route path="/create" exact component={CreateTodo} />
      </Router>
    );
  }
}

export default App;
