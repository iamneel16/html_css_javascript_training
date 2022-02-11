import React, { Component } from 'react';
import axios from 'axios';
class DeleteVendor extends Component {
    constructor() {
        super();
        this.state = { Vendor: [] };
    }
    componentDidMount() {
        axios.get("http://localhost:5000/Vendor").then(response => {
            this.setState({ Vendor: response.data });
            console.log(response.data)
            console.log(response.data[3])
            
        })
    }
    onDelete = (vid) => {
        console.log(vid)
        axios.delete("http://localhost:5000/Vendor/" + vid).then(resp => {
            console.log("Deleting Data", resp);
        })
    }
    render() {
        let { Vendor } = this.state;
        return (
            <>
                <h5>Delete a Vendor </h5>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Vendor ID</th>
                            <th>Vendor Name</th>
                            <th>Contact</th>
                            <th>Type</th>
                            <th>Delete</th>
                        </tr>
                        {Vendor.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.vendorName}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.type}</td>
                                    <td><button className="btn btn-danger" onClick={() => this.onDelete(item.id)}>Delete</button></td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
export default DeleteVendor