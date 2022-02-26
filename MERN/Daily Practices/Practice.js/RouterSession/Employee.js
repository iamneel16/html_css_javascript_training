import React from 'react';
import { useParams } from 'react-router-dom';
function Employee()
{
    const { eid, ename } = useParams();
    return(
        <>
            <h5>Selected Employee Id : {eid} : Employee Name  : {ename}</h5>
        </>
    )
}

export default Employee