import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Employees()
{
    const EData = [{empid:1,empname:'Manish',address:'h.no.1233'},
        {empid:2,empname:'Rajesh',address:'h.no.12343'},
        {empid:3,empname:'Amit',address:'h.no.12343'},
        {empid:4,empname:'Karan',address:'h.no.12433'},
        {empid:5,empname:'Shreya',address:'h.no.12433'}]
    const [EmployeeData, setEmployeeData] = useState(EData);
    return(
        <>
            <h5>Employees</h5>
            <table className="table">
            <tbody>
                    {EmployeeData.map((item,idx)=>{
                        return(
                            <tr key={idx}>
                                <td>{item.empid}</td>
                                <td>{item.empname}</td>
                                <td>{item.address}</td>
                                {/* <td><Link to={'/employees/'+ item.empid + "/" + item.empname } >{item.empname}</Link></td> */}
                                <td><Link className="btn btn-primary" to={`/employees/${item.empid}/${item.empname}`} >{item.empname}</Link></td>
                            </tr>
                        )
                    })}
            </tbody>
            </table>
        </>
    )
}

export default Employees