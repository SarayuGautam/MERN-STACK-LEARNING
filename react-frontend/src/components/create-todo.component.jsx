import React, { Component } from "react";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      responsible: "",
      priority: "",
      completed: false,
    };
  }

  onFormFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(`TODO Description: ${this.state.description}`);
    console.log(`TODO Responsible: ${this.state.responsible}`);
    console.log(`TODO Priority: ${this.state.priority}`);

    this.setState({
      priority: "",
      description: "",
      responsible: "",
      completed: false,
    });
  };
  render() {
    return (
      <div className="container" style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Desription:</label>
            <input
              type="text"
              className="form-control"
              value={this.description}
              onChange={this.onFormFieldChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Responsible:</label>
            <input
              type="text"
              className="form-control"
              value={this.responsible}
              onChange={this.onFormFieldChange}
            ></input>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="PriorityOptions"
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
              name="PriorityOptions"
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
              name="PriorityOptions"
              id="priorityHigh"
              value="High"
              checked={this.state.priority === "High"}
              onChange={this.onFormFieldChange}
            />
            <label className="form-check-label">High</label>
          </div>
          <div className="form-group" style={{ marginTop: 10 }}>
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
