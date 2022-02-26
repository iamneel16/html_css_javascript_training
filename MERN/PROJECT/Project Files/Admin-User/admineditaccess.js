import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ShoppingCart/signup.css'
import { useNavigate } from 'react-router'
function AdminEdit() {
    const navigate = useNavigate()
    const [value, setValue] = useState({
        userid: '',
        password: '',
        status: ''
    })
    const [flag,setFlag] = useState(false)
    const [id,setId] = useState()

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/user/user").then(response => {
            //     console.log(response)
            //     console.log(response.data)
            setUserData(response.data)
            // console.log(response.data)

        })
    },[])
    const onClickHandle = (e) => {
        // e.preventDefault()
        setFlag(false)
        console.log(e)
        console.log(userData[e])
        setValue({
            userid:userData[e].userid,
            password:userData[e].password,
            status:(userData[e].status)
        })
         setId(userData[e]._id)
        
        
        
        

    }
    const onChangeHandler = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
        setFlag(false)
    }
    const OnSubmitHandler = (event) => {

        event.preventDefault()

            const URL = `http://localhost:5000/user/update/${id}`;
            axios.put(URL,value).then(response=>{
            console.log(response);
                
            axios.get("http://localhost:5000/user/user").then(response => {
            //     console.log(response)
            //     console.log(response.data)
            setUserData(response.data)
            // console.log(response.data)
            setFlag(true)
        })
        })
        

    }
    const onClickHandleDelete = (e) => {
        // e.preventDefault()
            console.log(e)
        setId(userData[e]._id)
    
        console.log(userData[e]._id)
        const URL = `http://localhost:5000/user/delete/${id}`;
        axios.delete(URL).then(response=>{
        console.log(response);
           

        axios.get("http://localhost:5000/user/user").then(response => {
            //     console.log(response)
            //     console.log(response.data)
            setUserData(response.data)
            // console.log(response.data)

        })
        })
        
    }
    // const onAddClick ()=>{

    // }
    
    return (
        <div>
            <center><button className='btn btn-dark my-2' onClick={()=>navigate('/admin/user/add')}>Add User</button></center>
            {/* <button className="btn btn-danger" onClick={onClickHandle}>product</button> */}
            <div>
                <table className='table table-striped table-dark'>

                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Password</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Edit</th>

                        </tr>
                        {userData.map((item, idx) => {
                            return (

                                <tr key={idx}>
                                    <td>{item.userid}</td>
                                    <td>{item.password}</td>
                                    <td>{String(item.status)}</td>
                                    <td><button className="btn btn-danger" onClick={() => { onClickHandleDelete(idx) }}>Delete</button></td>
                                    <td><button className="btn btn-info" onClick={() => { onClickHandle(idx) }}>Edit</button></td>
                                </tr>
                                

                            )
                        })}
                       
                    </tbody>
                </table>
                <div>
                    <h2>
                        
                    </h2>
                </div>
                

            </div>
            <div className='container'>
                <div className='app-wrapper'>
                    <div>
                        <h2 className='title'>Edit User Details</h2>
                    </div>
                    <form className='form-wrapper'>
                        <div className='name'>
                            <label className='label'>ID</label>
                            <input type="text" className="input" name='userid' value={value.userid} onChange={onChangeHandler} autoComplete='off' />
                        </div>
                        <div className='password'>
                            <label className='label'>Password</label>
                            <input type="password" className="input" name='password' value={value.password} onChange={onChangeHandler} />
                        </div>
                        <div className='name'>
                            <label className='label'>Status</label>
                            <input type="boolean" className="input" name='status' value={value.status} onChange={onChangeHandler} autoComplete='off' />
                        </div>
                        
                        <div>
                            <button className='submit' onClick={OnSubmitHandler}>Edit User</button>
                        </div>
                        {flag ? <div>
                        <h5 className='title'>Details Edited Successfully</h5>

                    </div> : ""}

                    </form>
                </div>
            </div>
        </div>


    )
}
export default AdminEdit