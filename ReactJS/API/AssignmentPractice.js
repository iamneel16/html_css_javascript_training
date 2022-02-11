import React, { Component } from 'react';
import axios from 'axios';


class EmployeeAPI extends Component {
    constructor() {
        super()
        this.state = { employeeData: [] }
    }
    componentDidMount() {
        axios.get("http://localhost:4000/user").then(response => {
            // console.log(response)
            // console.log(response.data)
            this.setState({ employeeData: response.data })
        })
    }
    render() {
        let { employeeData } = this.state
        console.log(employeeData)
        return (
            <div className='container'>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Username</th>
                            <th>Employee Password</th>
                            <th>Employee Status</th>
                        </tr>
                        {employeeData.map((item, idx) => {
                            return (
                                <div>
                                    <tr key={idx}>
                                        <td>{item.id}</td>
                                        <td>{item.username}</td>
                                        <td>{item.password}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                </div>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmployeeAPI;
