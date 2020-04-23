import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

export default function CustomNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://codingthesmartway.com">
        <img src={logo} width="30" height="30" alt="CodingTHeSmartWay.com" />
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
  );
}
