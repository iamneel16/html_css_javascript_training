
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import './ShoppingCart/signup.css'
function AdminAddUser() {
    const [value, setValue] = useState({
        userid: '',
        password: '',
        status: ''
    })
    const navigate=useNavigate()
    const [flag, setFlag] = useState(false)
    const [id, setId] = useState()

    const [userData, setUserData] = useState([]);
    const onChangeHandler = (event) => {
        
        setValue({ ...value, [event.target.name]: event.target.value })
    }
    const OnSubmitHandler = (event) => {

        event.preventDefault()
        setFlag(true)
        const URL = "http://localhost:5000/user/submit";
        axios.post(URL,value).then(response=>{
        console.log(response);
       
    })
        

    }
    return (
        <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>Add User</h2>
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
                        <button className='submit' onClick={OnSubmitHandler}>Add User</button>
                    </div>
                    {flag ? <div>
                        <h5 className='title'>Account Created Successfully</h5>
                        <button className='submitsignup' onClick={()=>(navigate('/admin/user'))}>View Users</button>
                    </div> : ""}

                </form>
            </div>
        </div>
    )
}
export default AdminAddUser