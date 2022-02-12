import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Client()
{
    const clientDefData = [{clientid:1,clientname:'Suresh',phone:'12345'},
        {clientid:2,clientname:'Neel',phone:'56789'},
        {clientid:3,clientname:'Sachin',phone:'98765'},
        {clientid:4,clientname:'Rutika',phone:'45321'},
        {clientid:5,clientname:'Riya',phone:'12395'}]
    const [clientData, setClientData] = useState(clientDefData);
    return(
        <>
            
            <table className="table table-dark">
            <tbody>
                <tr>
                    <th>Client ID</th>
                    <th>Client Name</th>
                    <th>Client Phone</th>
                    <th>Show Details</th>
                </tr>
                    {clientData.map((item,idx)=>{
                        return(
                            <tr key={idx}>
                                <td>{item.clientid}</td>
                                <td>{item.clientname}</td>
                                <td>{item.phone}</td>
                                <td><Link className='btn btn-light' to={'/client/'+ item.clientid + "/" + item.clientname } >{item.clientname}</Link></td>
                                {/* <td><Link className="btn btn-primary" to={`/clientloyees/${item.clientid}/${item.clientname}`} >{item.clientname}</Link></td> */}
                            </tr>
                        )
                    })}
            </tbody>
            </table>
        </>
    )
}

export default Client