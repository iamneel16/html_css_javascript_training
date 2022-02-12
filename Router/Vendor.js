import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class VendorRead extends Component {
    constructor() {
        super()
        this.state = { vendorData: [] }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/Vendor").then(response => {
            console.log(response)
            console.log(response.data)
            this.setState({ vendorData: response.data })
        })
    }
    render() {
        let { vendorData } = this.state
        console.log(vendorData)
        return (
            <div className='container'>
                <table className='table table-dark'>
                    <tbody>
                        <tr>
                            <th>Vendor ID</th>
                            <th>Vendor Name</th>
                            <th>Vendor Contact</th>
                            <th>Vendor type</th>
                            <th>Show Details</th>
                        </tr>
                        {vendorData.map((item, idx) => {
                            return (
                              
                                    <tr key={idx}>
                                        <td>{item.id}</td>
                                        <td>{item.vendorName}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.type}</td>
                                        <td><Link className='btn btn-light' to={'/vendor/'+ item.id + "/" + item.vendorName }>{item.vendorName}</Link></td>
                                    </tr>
                                
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default VendorRead;
