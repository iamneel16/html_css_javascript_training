import React, { Component } from 'react'
class Employee extends Component {
    constructor() {
        super();
        this.state = {
            empData:
                { id: 101, name: "Neel", salary: "40000" }
        };

    }
    render(){
        return(
            <div>
                <p>Employee id: {this.state.empData.id}</p>
                <br/>
                <hr/>
                <p>Employee Name: {this.state.empData.name}</p>
                <br/>
                <hr/>
                <p>Employee Salary: {this.state.empData.salary}</p>
            </div>
        )
    }
}
export default Employee;