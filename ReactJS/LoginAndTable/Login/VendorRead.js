import React, { Component } from 'react';
import axios from 'axios';


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
                <h2 style={{color:'green'}}>User Logged In Successfuly</h2>
                <table className='table table-striped table-dark'>

                    <tbody>
                        <tr>
                            <th>Vendor ID</th>
                            <th>Vendor Name</th>
                            <th>Vendor Contact</th>
                            <th>Vendor type</th>
                        </tr>
                        {vendorData.map((item, idx) => {
                            return (

                                <tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.vendorName}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.type}</td>
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
