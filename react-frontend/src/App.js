import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/pages/todos-list.component";
import EditTodo from "./components/pages/edit-todo.component";
import CreateTodo from "./components/pages/create-todo.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNav from "./components/elements/navbar.component";
import DeleteTodo from "./components/pages/delete-todo.component";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <CustomNav />
        </div>
        <div className="container">
          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/delete/:id" component={DeleteTodo} />
          <Route path="/create" exact component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
