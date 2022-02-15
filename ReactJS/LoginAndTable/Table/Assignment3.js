import React, { useState } from 'react'

function ReadData() {
    const clientDefData = [{ clientid: 1, clientname: 'Suresh', phone: '12345' },
    { clientid: 2, clientname: 'Neel', phone: '56789' },
    { clientid: 3, clientname: 'Sachin', phone: '98765' },
    { clientid: 4, clientname: 'Rutika', phone: '45321' },
    { clientid: 5, clientname: 'Riya', phone: '12395' }]
    const [clientData] = useState(clientDefData);
    const [temp, setTemp] = useState(0)


    const onData = (val) => {
        setTemp(val)
        // console.log(clientDefData[val - 1].clientid)
        // console.log(val)
        // setFlag(true)
        // if ((clientDefData[val - 1].clientid) === val) {
        //     setFlag(true)

        // }






    }
    return (
        <>

            <table className="table table-dark">
                <tbody>
                    <tr>
                        <th>Client ID</th>
                        <th>Client Name</th>

                        <th>Show Details</th>
                    </tr>
                    {clientData.map((item, idx) => {
                        return (
                            <>

                                <tr key={idx}>
                                    <td>{item.clientid}</td>
                                    <td>{item.clientname}</td>
                                    {/* <td>{item.phone}</td> */}
                                    <td> <button className='btn btn-light' onClick={() => onData(item.clientid)}>Click</button></td>
                                    
                                    {/* <td><Link className="btn btn-primary" to={`/clientloyees/${item.clientid}/${item.clientname}`} >{item.clientname}</Link></td> */}
                                </tr>



                                {temp === item.clientid ?
                                
                                <tr>
                                    <td>{item.clientid}</td>
                                    <td>{item.clientname}</td>
                                    <td>{item.phone}</td>
                                </tr> : ""}





                                    
                            </>
                            
                        )
                    })}
                    
                </tbody>
            </table>
        </>
    )
}
export default ReadData