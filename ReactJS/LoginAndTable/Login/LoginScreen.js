import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function LoginScreen() {
    const [userName, setUserId] = useState();
    const [password, setPassword] = useState();
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    const [flag,setFlag] = useState(false)
 


    const formSubmit = () => {
        for (let a in userData) {
            if (userName === userData[a].username && password === userData[a].password) {
                navigate("/loggedin")
            }

        }
        setFlag(true)
        // userData.map((item) =>{
        //     return(



        //     )
        // })
        // console.log(loopData)
    }
    useEffect(() => {
        LoadClient();
    }, [])
    const LoadClient = () => {
        axios.get("http://localhost:4000/user").then(response => {
            setUserData(response.data);
            // console.log(response.data[2].password);
        })
    }

    return (

        <div className='container-fluid'>
            <h3>Log In</h3>
            <div className='form-group'>
                <label>Username:</label>
                <input type='text' className='form-control' placeholder='ex:admin101' onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input type='password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='form-group'>
                <button className='btn btn-dark my-2' onClick={(e) => formSubmit()}>Submit</button>
            </div>
            {flag ? <span><h3 className='nomatch'>Details Do Not Match.</h3></span>:""}
            
        </div>
    )
}
export default LoginScreen
