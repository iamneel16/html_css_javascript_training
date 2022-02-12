import React from 'react';
import { useParams } from 'react-router-dom';
function VendorParams() {
    const { id, vendorName } = useParams();
    return (
        <>
            <div className='vendorparam'>
                {/* <h5>You have selected vendor having ID: {id}</h5>
                <h5>The name of the vendor is: {vendorName}</h5> */}
                <table className='table table-dark'>
                    <tbody>
                        <th>Vendor ID</th>
                        <th>Vendor Name</th>
                        <tr>
                            <td>{id}</td>
                            <td>{vendorName}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default VendorParams