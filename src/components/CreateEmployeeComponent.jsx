import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.saveEmployee = this.saveEmployee.bind(this);
  }
  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("employee => " + JSON.stringify(employee));
    EmployeeService.createEmployee(employee).then((res) => {
      this.props.history.push("/employees");
    });
  };
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeemailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  cancel() {
    this.props.history.push("/employees");
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                      placeholder="First Name"
                      name="firstname"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                      placeholder="Last Name"
                      name="lastname"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={(event) => this.changeLastNameHandler(event)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Id:</label>
                    <input
                      placeholder="Email Id"
                      name="emailid"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeemailIdHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;