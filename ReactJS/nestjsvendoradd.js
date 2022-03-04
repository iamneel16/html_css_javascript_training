import React,{useState} from 'react'
import axios from 'axios'

function NestJsVendorAdd(){
    const [vendorname,setVendorName] = useState("")
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")
    const [flag,setFlag] = useState(false)
    const onClickHandler = ()=>{
        const vendor = {
            vendorname:vendorname,
            address:address,
            phone:phone
        }
        const URL = 'http://localhost:4000/vendor'
        axios.post(URL,vendor).then(response=>{
            console.log(response.data)
            setFlag(true)
        })
    }
    return(
        <div className='container'>
            <center><h1 style={{color:'red'}}>Add Vendor to Vendor API</h1></center>
            <div className='form-group'></div>
            <label>Vendor Name</label>
            <input type='text' className='form-control' onChange={(e)=>setVendorName(e.target.value)}/>
            <div className='form-group'></div>
            <label>Address</label>
            <input type='text' className='form-control'onChange={(e)=>setAddress(e.target.value)}/>
            <div className='form-group'></div>
            <label>Phone Number</label>
            <input type='text' className='form-control'onChange={(e)=>setPhone(e.target.value)}/><br></br>
            <button className='btn btn-danger' onClick={onClickHandler}>Submit Data</button>
            {flag ? <div className='container'>
                <h1 style={{backgroundcolor:'black'}}>Data Inserted Succesfully</h1>
            </div>:""}
        </div>
    )
}
export default NestJsVendorAdd