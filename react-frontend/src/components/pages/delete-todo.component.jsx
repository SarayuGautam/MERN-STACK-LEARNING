import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export default class DeleteTodo extends Component {
  componentDidMount() {
    axios
      .delete(
        "http://localhost:5000/todos/delete/" + this.props.match.params.id
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3>Todo Deleted!!</h3>
        <Link
          style={{ marginTop: 20 }}
          to="/"
          className="btn btn-outline-primary"
        >
          GoBack
        </Link>
      </div>
    );
  }
}
