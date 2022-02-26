import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const AdminSignup = () => {
    const [value, setValue] = useState({
        productid: '',
        productname: '',
        price:'',
        description:'',
        img:''
    })
    const navigate = useNavigate()
    const [flag, setFlag] = useState(false)
    const [flagid, setFlagID] = useState()
    const [flagproductname,setFlagProductname] = useState()
    const OnSubmitHandler = (event) => {

        event.preventDefault()
        if(value.productid.length && value.productname.length > 2){
            setFlag(true)
            console.log(value)
            const URL = "http://localhost:5000/product/submitproduct";
            axios.post(URL,value).then(response=>{
            console.log(response);
           
        });
        }

    }
   
    const onChangeHandler = (event) => {
        
        if (value.productid.length < 2) {
            setFlagID(true)
            
        }
        else {
            setFlagID(false)
        }
        if (value.productname.length<2)
        {
            setFlagProductname(true)
        }
        else{
            setFlagProductname(false)
        }
        setFlag(false)
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    return (
        <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>Add Product</h2>
                </div>
                <form className='form-wrapper'>
                    <div className='name'>
                        <label className='label'>ID</label>
                        <input type="text" className="input" name='productid' value={value.productid} onChange={onChangeHandler} autoComplete='off' />
                    </div>
                    {flagid ? <div>
                        <h4 className='validationwarn'>Product ID must be greater than 2 Characters</h4>
                    </div> : ""}
                    <div className='password'>
                        <label className='label'>Product Name</label>
                        <input type="text" className="input" name='productname' value={value.productname} onChange={onChangeHandler} />
                    </div>
                    {flagproductname ? <div>
                        <h4 className='validationwarn'>Productname must be greater than 2 Characters</h4>
                    </div> : ""}
                    <div className='name'>
                        <label className='label'>Price</label>
                        <input type="number" className="input" name='price' value={value.price} onChange={onChangeHandler} autoComplete='off' />
                    </div>
                    <div className='name'>
                        <label className='label'>Description</label>
                        <input type="text" className="input" name='description' value={value.description} onChange={onChangeHandler} autoComplete='off' />
                    </div>
                    <div className='name'>
                        <label className='label'>Image Link</label>
                        <input type="text" className="input" name='img' value={value.img} onChange={onChangeHandler} autoComplete='off' />
                    </div>
                    <div>
                        <button className='submit' onClick={OnSubmitHandler}>Add Product</button>
                    </div>
                    {flag ? <div>
                        <h5 className='title'>Product Added Successfully</h5>
                        <button className='submitsignup' onClick={()=>(navigate('/admin/product'))}>View Product List</button>
                    </div> : ""}

                </form>
            </div>
        </div>
    )
}



export default AdminSignup