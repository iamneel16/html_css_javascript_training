import React, { useState } from 'react';
function Display4()
{
    const data = [
        {clientid:1,clientname:'TCS',region:'East', classCode:'bg-primary', selected:false},
        {clientid:2,clientname:'Infosys',region:'West', classCode:'bg-success', selected:false},
        {clientid:3,clientname:'Accenture',region:'North', classCode:'bg-danger', selected:false},
        {clientid:4,clientname:'Cognizant',region:'South', classCode:'bg-warning', selected:false}];

    const [client, setClient] = useState(data);
    const onRowSelect = (rowIndex)=>{
        client[rowIndex].selected = !client[rowIndex].selected;
        console.log(client[rowIndex].selected, data[rowIndex].selected);
        setClient([...client]);
    }
    return(
        <>
        
            <table className='table table-striped'>
                <tbody> 
                    <tr>
                        <th>Client Id</th>
                        <th>Client Name</th>
                        <th>Region</th>
                    </tr>
                    {
                        client.map((item,idx)=>{
                            return(
                                <tr key={idx} className={item.selected? 'bg-danger text-white':null} >
                                    <td>{item.clientid}</td>
                                    <td>{item.clientname}</td>
                                    <td>
                                     {item.region==='East' && (<span className='bg-primary text-white'>{item.region}</span>)}
                                     {item.region==='West' && (<span className='bg-success text-white'>{item.region}</span>)}
                                     {item.region==='North' && (<span className='bg-danger text-white'>{item.region}</span>)}
                                     {item.region==='South' && (<span className='bg-warning text-white'>{item.region}</span>)}
                                    </td>
                                    <td className='btn btn-info' onClick={()=>onRowSelect(idx)} >Select</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Display4;