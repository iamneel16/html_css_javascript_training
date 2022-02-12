import React from 'react';
import { useParams } from 'react-router-dom';
function ClientParam() {
    const { clientId, clientName } = useParams();
    return (
        <>
            <div className='clientparam'>
                {/* <h5>You have selected client having ID: {clientId}</h5>
                <h5>The name of the client is: {clientName}</h5> */}
                <table className='table table-dark'>
                    <tbody>
                        <th>Client ID</th>
                        <th>Client Name</th>
                    <tr>
                        <td>{clientId}</td>
                        <td>{clientName}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ClientParam