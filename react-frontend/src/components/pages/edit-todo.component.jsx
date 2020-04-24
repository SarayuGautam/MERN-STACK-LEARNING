import React, { Component } from "react";
import axios from "axios";

export default class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      responsible: "",
      priority: "",
      completed: false,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/todos/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          description: res.data.description,
          responsible: res.data.responsible,
          priority: res.data.priority,
          completed: res.data.completed,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  onFormFieldChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onTodoCompleted = (e) => {
    this.setState({
      completed: !this.state.completed,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      description: this.state.description,
      responsible: this.state.responsible,
      priority: this.state.priority,
      completed: this.state.completed,
    };
    console.log(obj);

    axios
      .post(
        "http://localhost:5000/todos/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h3 align="center">Update Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Description: </label>
            <input
              name="description"
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onFormFieldChange}
            />
          </div>
          <div className="form-group">
            <label> Responsible: </label>
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.onFormFieldChange}
            />
          </div>{" "}
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="priority"
              id="priorityLow"
              value="Low"
              checked={this.state.priority === "Low"}
              onChange={this.onFormFieldChange}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="priority"
              id="priorityMedium"
              value="Medium"
              checked={this.state.priority === "Medium"}
              onChange={this.onFormFieldChange}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="priority"
              id="priorityHigh"
              value="High"
              checked={this.state.priority === "High"}
              onChange={this.onFormFieldChange}
            />
            <label className="form-check-label">High</label>
          </div>
          <div className="form-check" style={{ marginTop: 20 }}>
            <input
              type="checkbox"
              className="form-check-input"
              id="completedCheckbox"
              name="completedCheckbox"
              onChange={this.onTodoCompleted}
              checked={this.state.completed}
              value={this.state.completed}
            />
            <label htmlFor="completedCheckbox" className="form-check-label">
              Completed
            </label>
          </div>
          <br />
          <div className="form-group" style={{ marginTop: 10 }}>
            <input
              type="submit"
              value="Update Todo"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
