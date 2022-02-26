import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function LoginPageFinal() {
    const [uservalue,setUserValue] = useState()
    const [value, setValue] = useState({
        userid: '',
        password: ''
    })
    const [flag,setFlag] = useState(false)

    const navigate = useNavigate()
    const onChangeHandler = (event) => {

        // console.log("Hello")
        setFlag(false)
        setValue({ ...value, [event.target.name]: event.target.value })
    }
    const OnSubmitHandler = (event) => {

        event.preventDefault()
        const URL = "http://localhost:5000/user/get";
        axios.post(URL, value).then(response => {
            console.log(response.data)
            if(response.data===false){
                console.log("Guest User")
                navigate("/guest")
            }
            else if(response.data===true){
                
                console.log("Admin User")
                navigate("/admin")
            }

        }).catch(err=>{
            console.log(err.response.data)
            setFlag(true)
        })
        // console.log("Hello 2")
        // console.log(value.userid, value.password)

        //catch(err=>{err.statuscode});  
    }
    return (
        
        <div className='container'>
            
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>Login</h2>
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
                    {flag ? <div>
                        <h3 className='validationwarn'>Credentials Do Not Match</h3>
                    </div> : ""}
                    <div>
                        <button className='submitlogin' onClick={OnSubmitHandler}>Login</button>
                    </div>
                    
                    <div>
                   
                    <button className='submit my-3' onClick={()=>(navigate('/signup'))}>Signup</button>
                    </div>
                    <h2 className='newuserinfo'>New User Signup here</h2>

                </form>
            </div>
        </div>
    )
}



export default LoginPageFinal