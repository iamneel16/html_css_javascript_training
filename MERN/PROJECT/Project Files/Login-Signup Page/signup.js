import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
const Signup = () => {
    const [value, setValue] = useState({
        userid: '',
        password: '',
        status:'false'
    })
    const navigate = useNavigate()
    const [flag, setFlag] = useState(false)
    const [flagid, setFlagID] = useState()
    const [flagpassword,setFlagPassword] = useState()
    const OnSubmitHandler = (event) => {

        event.preventDefault()
        if(value.userid.length && value.password.length > 4){
            setFlag(true)
            console.log(value)
            const URL = "http://localhost:5000/user/submit";
            axios.post(URL,value).then(response=>{
            console.log(response);
           
        })
        }

    }
    const onChangeHandler = (event) => {
        
        if (value.userid.length < 4) {
            setFlagID(true)
            
        }
        else {
            setFlagID(false)
        }
        if (value.password.length<4)
        {
            setFlagPassword(true)
        }
        else{
            setFlagPassword(false)
        }
        setFlag(false)
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    return (
        <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>Create Account</h2>
                </div>
                <form className='form-wrapper'>
                    <div className='name'>
                        <label className='label'>ID</label>
                        <input type="text" className="input" name='userid' value={value.userid} onChange={onChangeHandler} autoComplete='off' />
                    </div>
                    {flagid ? <div>
                        <h4 className='validationwarn'>User ID must be greater than 4 Characters</h4>
                    </div> : ""}
                    <div className='password'>
                        <label className='label'>Password</label>
                        <input type="password" className="input" name='password' value={value.password} onChange={onChangeHandler} />
                    </div>
                    {flagpassword ? <div>
                        <h4 className='validationwarn'>Password must be greater than 4 Characters</h4>
                    </div> : ""}
                    <div>
                        <button className='submit' onClick={OnSubmitHandler}>SignUP</button>
                    </div>
                    {flag ? <div>
                        <h5 className='title'>Account Created Successfully</h5>
                        <button className='submitsignup' onClick={()=>(navigate('/'))}>Login</button>
                    </div> : ""}

                </form>
            </div>
        </div>
    )
}



export default Signup