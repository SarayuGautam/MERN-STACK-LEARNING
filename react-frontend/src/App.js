import React, { Component } from "react";
import "./App.css";
import TodoList from "../src/components/todos-list.component";
import EditTodo from "../src/components/edit-todo.component";
import CreateTodo from "../src/components/create-todo.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com">
              <img
                src={logo}
                width="30"
                height="30"
                alt="CodingTHeSmartWay.com"
              />
            </a>
            <Link to="/" className="navbar-brand">
              Mern Stack Todo App
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">
                    CreateTodo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit:id" component={EditTodo} />
        <Route path="/create" exact component={CreateTodo} />
      </Router>
    );
  }
}

export default App;
